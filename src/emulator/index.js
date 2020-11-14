import React, { Fragment, useRef, useEffect, useState } from "react";
import { dia, shapes, ui, g, linkTools } from "@clientio/rappid";
import DevicesMenu from "../devices";

let currentWire = 'Медный кабель';
const getEventHandlerConfig = (graph) => ({
  "element:pointerdown": function (elementView, evt) {
    evt.data = elementView.model.position();
  },
  "element:pointerup": function (elementView, evt, x, y) {
    const coordinates = new g.Point(x, y);
    const elementAbove = elementView.model;
    const elementBelow = this.model
      .findModelsFromPoint(coordinates)
      .find(function (el) {
        return el.id !== elementAbove.id;
      });

    // If the two elements are connected already, don't
    // connect them again (this is application-specific though).
    if (
      elementBelow &&
      graph.getNeighbors(elementBelow).indexOf(elementAbove) === -1
    ) {
      // Move the element to the position before dragging.
      elementAbove.position(evt.data.x, evt.data.y);

      // Create a connection between elements.
      const wire = currentWire === 'Медный кабель' ? createConnectViaCuprum(graph) : createConnectViaRJ45(graph);
      const link = wire(elementAbove, elementBelow);

      // Add remove button to the link.
      const tools = new dia.ToolsView({
        tools: [new linkTools.Remove()],
      });
      link.findView(this).addTools(tools);
    }
  },
});

const initCanvas = (canvas) => {
  const graph = new dia.Graph();
  const paper = new dia.Paper({
    model: graph,
    width: "100%",
    height: "100vh",
    gridSize: 10,
    drawGrid: true,
    interactive: { linkMove: false },
    defaultConnectionPoint: {
      name: "boundary",
      args: {
        extrapolate: true,
        sticky: true,
      },
    },
    validateConnection: function () {
      return false;
    },
    background: {
      color: "#F8F9FA",
    },
  });
  const eventHandlerConfig = getEventHandlerConfig(graph);
  paper.on(eventHandlerConfig);

  const stencil = new ui.Stencil({ paper, width: 100, height: 100 });

  const scroller = new ui.PaperScroller({
    paper,
    cursor: "grab",
  });

  canvas.current.appendChild(scroller.el);
  canvas.current.appendChild(stencil.el);
  scroller.render().center();
  stencil.render();
  return graph;
};

const createAddCommutator = (graph) => (x, y) => {
  const commutator = new shapes.standard.Rectangle({
    position: { x, y },
    size: { width: 200, height: 50 },
    attrs: {
      label: {
        text: "Коммутатор",
      },
    },
  });
  commutator.addTo(graph);
  return commutator;
};
const createAddBMRZ = (graph) => (x, y) => {
  const bmrz = new shapes.standard.Rectangle({
    position: { x, y },
    size: { width: 300, height: 300 },
    attrs: {
      label: {
        text: "Механотроника БМРЗ",
      },
    },
  });
  bmrz.addTo(graph);
  return bmrz;
};
const createConnectViaRJ45 = (graph) => (block1, block2) => {
  const wire = new shapes.standard.ShadowLink({
    smooth: true,
    markup: [
      {
        tagName: "path",
        selector: "shadow",
        attributes: {
          fill: "none",
        },
      },
      {
        tagName: "path",
        selector: "line",
        attributes: {
          fill: "none",
        },
      },
      {
        tagName: "text",
        selector: "label",
      },
    ],
    attrs: {
      line: {
        stroke: "#aaa",
      },
      label: {
        textPath: {
          selector: "line",
          startOffset: "50%",
        },
        textAnchor: "middle",
        textVerticalAnchor: "middle",
        text: "RJ45",
        fill: "#f6f6f6",
        fontSize: 12,
        fontWeight: "bold",
      },
    },
  });
  wire.source(block1);
  wire.target(block2);
  wire.addTo(graph);
  return wire;
};
const createConnectViaCuprum = (graph) => (block1, block2) => {
  const wire = new shapes.standard.ShadowLink({
    smooth: true,
    markup: [
      {
        tagName: "path",
        selector: "shadow",
        attributes: {
          fill: "none",
        },
      },
      {
        tagName: "path",
        selector: "line",
        attributes: {
          fill: "none",
        },
      },
      {
        tagName: "text",
        selector: "label",
      },
    ],
    attrs: {
      line: {
        stroke: "#aaa",
      },
      label: {
        textPath: {
          selector: "line",
          startOffset: "50%",
        },
        textAnchor: "middle",
        textVerticalAnchor: "middle",
        text: "Медный кабель",
        fill: "orange",
        fontSize: 12,
        fontWeight: "bold",
      },
    },
  });
  wire.source(block1);
  wire.target(block2);
  wire.addTo(graph);
  return wire;
};

const Emulator = () => {
  const canvas = useRef(null);
  const [wire, setWire] = useState("Медный кабель");
  let addBMRZ, addCommutator;
  let connectViaRJ45, connectViaCuprum;

  useEffect(() => {
    const graph = initCanvas(canvas);
    addCommutator = createAddCommutator(graph);
    addBMRZ = createAddBMRZ(graph);
    connectViaRJ45 = createConnectViaRJ45(graph);
    connectViaCuprum = createConnectViaCuprum(graph);
  }, []);
  useEffect(() => {
    currentWire = wire;
  }, [wire]);

  return (
    <Fragment>
      <DevicesMenu
        onCreate={(type) => {
          console.log("type ", type, " wire", wire);
          switch (type) {
            case "БМРЗ 150":
              return addBMRZ(
                10 + Math.random() * 100,
                10 + Math.random() * 100
              );
            case "GL 100":
            case "CISCO 1000":
              return addCommutator(
                10 + Math.random() * 100,
                10 + Math.random() * 100
              );
            case "Медный кабель":
            case "Витая пара RJ45":
              return setWire(type);
            default:
              return;
          }
        }}
      />
      <div className="canvas" ref={canvas} />
    </Fragment>
  );
};

export default Emulator;
