import React, {Fragment, useRef, useEffect, useState} from "react";
import { dia, shapes, ui } from "@clientio/rappid";
import DevicesMenu from "../devices";

const initCanvas = (canvas) => {
  const graph = new dia.Graph();
  const paper = new dia.Paper({
    model: graph,
    width: "100%",
    height: "100vh",
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

const Emulator = () => {
  const canvas = useRef(null);
  const [wire, setWire] = useState('Медный кабель')
  let addBMRZ, addCommutator, connectViaRJ45;

  useEffect(() => {
    const graph = initCanvas(canvas);
    addCommutator = createAddCommutator(graph);
    addBMRZ = createAddBMRZ(graph);
    connectViaRJ45 = createConnectViaRJ45(graph);

    // const block1 = addBMRZ(100, 100);
    // const block2 = addBMRZ(100, 100);
    // const commutator = addCommutator(100, 100);
    //
    // connectViaRJ45(commutator, block1);
    // connectViaRJ45(commutator, block2);
  }, []);

  return (
    <Fragment>
      <DevicesMenu onCreate={(type) => {
        console.log('type ', type, ' wire', wire);
        switch (type) {
          case 'БМРЗ 150':
           return addBMRZ(10, 10);
          case 'GL 100':
          case 'CISCO 1000':
            return addCommutator(10, 10);
          case 'Медный кабель':
          case 'Витая пара RJ45':
            return setWire(type);
          default:
            return;
        }
      }}/>
      <div className="canvas" ref={canvas} />
    </Fragment>
  );
};

export default Emulator;
