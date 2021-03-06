import React, { Fragment, useRef, useEffect, useState } from "react";
import { dia, shapes, ui, g, linkTools } from "@clientio/rappid";
import DevicesMenu, { CUPRUM, RJ45 } from "./devices";
import DeviceProp from "./deviceProp";
import TopPanel from "./topPanel";

let currentWire = CUPRUM;
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
      const wire =
        currentWire === "Медный кабель"
          ? createConnectViaCuprum(graph)
          : createConnectViaRJ45(graph);
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

  const scroller = new ui.PaperScroller({
    paper,
    cursor: "grab",
  });

  canvas.current.appendChild(scroller.el);
  scroller.render().center();
  return graph;
};

const createAddCommutatorGL100 = (graph) => (x, y) => {
  const commutator = new shapes.standard.Rectangle({
    position: { x, y },
    size: { width: 600, height: 100 },
    attrs: {
      label: {
        text: "Коммутатор GL 100",
      },
    },
  });
  commutator.addTo(graph);
  return commutator;
};
const createAddCommutatorCISCO1000 = (graph) => (x, y) => {
  const commutator = new shapes.standard.Rectangle({
    position: { x, y },
    size: { width: 600, height: 100 },
    attrs: {
      label: {
        text: "Коммутатор CISCO 1000",
      },
    },
  });
  commutator.addTo(graph);
  return commutator;
};
const createAddBMRZ = (graph) => (x, y) => {
  const bmrz = new shapes.standard.Rectangle({
    position: { x, y },
    size: { width: 180, height: 180 },
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
        stroke: "orange",
      },
      label: {
        textPath: {
          selector: "line",
          startOffset: "50%",
        },
        textAnchor: "middle",
        textVerticalAnchor: "middle",
        text: CUPRUM,
        fill: "white",
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
  let addBMRZ;
  let addCommutatorGL100, addCommutatorCISCO1000;
  let connectViaRJ45, connectViaCuprum;

  useEffect(() => {
    const graph = initCanvas(canvas);
    addCommutatorGL100 = createAddCommutatorGL100(graph);
    addCommutatorCISCO1000 = createAddCommutatorCISCO1000(graph);
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
        onChange={(type) => {
          console.log("type ", type, " wire", wire);
          switch (type) {
            case "БМРЗ 150":
              return addBMRZ(
                10 + Math.random() * 100,
                10 + Math.random() * 100
              );
            case "CISCO 1000":
              return addCommutatorCISCO1000(
                10 + Math.random() * 100,
                10 + Math.random() * 100
              );
            case "GL 100":
              return addCommutatorGL100(
                10 + Math.random() * 100,
                10 + Math.random() * 100
              );
            case CUPRUM:
            case RJ45:
              return setWire(type);
            default:
              return;
          }
        }}
      />
      <div className="canvas" ref={canvas} />
      <DeviceProp />
      <TopPanel />
    </Fragment>
  );
};

export default Emulator;
