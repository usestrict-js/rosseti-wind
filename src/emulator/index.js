import React, {useRef, useEffect} from "react";
import { dia, ui, shapes } from '@clientio/rappid';

const Emulator = () => {
  const canvas = useRef(null);

  useEffect(() => {
    const graph =new dia.Graph();

    const paper = new dia.Paper({
      model: graph,
      interactive: { linkMove: false },
      defaultConnectionPoint: {
        name: 'boundary',
        args: {
          extrapolate: true,
          sticky: true
        }
      },
      validateConnection: function() {
        return false;
      },
      background: {
        color: '#F8F9FA',
      },
    });

    const scroller = new ui.PaperScroller({
      paper,
      autoResizePaper: true,
      cursor: 'grab'
    });

    canvas.current.appendChild(scroller.el);
    scroller.render().center();

    const block1 = new shapes.standard.Rectangle({
      position: { x: 100, y: 100 },
      size: { width: 100, height: 50 },
      attrs: {
        label: {
          text: 'Блок АЦП'
        }
      }
    });
    const block2 = new shapes.standard.Rectangle({
      position: { x: 100, y: 100 },
      size: { width: 100, height: 50 },
      attrs: {
        label: {
          text: 'Блок АЦП'
        }
      }
    });
    const commutator = new shapes.standard.Rectangle({
      position: {x: 300, y: 300},
      size: { width: 200, height: 50},
      attrs: {
        label: {
          text: 'Коммутатор1'
        }
      }
    });
    const link = new shapes.standard.Link();
    link.source(commutator);
    link.target(block1);

    commutator.addTo(graph);
    block1.addTo(graph);
    block2.addTo(graph);
    link.addTo(graph);

  }, [])

  return <div className="canvas" ref={canvas}/>;
};

export default Emulator;
