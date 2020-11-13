import React, {useRef, useEffect} from "react";
import { dia, ui, shapes } from '@clientio/rappid';

export const Board = () => {
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
          text: 'Коммутатор'
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

// class Board extends React.Component {
//   constructor(props) {
//     super(props);
//     this.graph = new joint.dia.Graph();
//   }
//
//   componentDidMount() {
//     this.paper = new joint.dia.Paper({
//       el: ReactDOM.findDOMNode(this.refs.paper),
//       width: 600,
//       height: 200,
//       model: this.graph,
//       gridSize: 1
//     });
//
//     const rect = new joint.shapes.basic.Rect({
//       position: { x: 100, y: 30 },
//       size: { width: 100, height: 30 },
//       attrs: {
//         rect: { fill: 'blue' },
//         text: { text: 'my box', fill: 'white' }
//       }
//     });
//
//     const rect2 = rect.clone();
//     rect2.translate(300);
//
//     const link = new joint.dia.Link({
//       source: { id: rect.id },
//       target: { id: rect2.id }
//     });
//
//     this.graph.addCells([rect, rect2, link]);
//   }
//
//   render() {
//     return <div>
//       <h1>Hello world</h1><div ref="paper"></div>
//     </div>;
//   }
// }

export default Board;
