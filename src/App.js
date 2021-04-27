import React, { useEffect, useState } from 'react';

import G6 from '@antv/g6';
import ReactDOM from 'react-dom';

const data = {
	// The array of nodes
	nodes: [
	  {
		id: 'node1',
		label: 'node1',
		x: 100,
		y: 200,
	  },
	  {
		  id: 'node2',
		  label: 'node2',
		x: 300,
		y: 200,
	  },
	],
	edges: [
	  {
		source: 'node1',
		target: 'node2',
	  },
	],
};
  
//container: ReactDOM.findDOMNode(ref.current),

function App() {
	const ref = React.useRef(null);
	let graph = null;
  
	useEffect(() => {
	  if (!graph) {
		graph = new G6.Graph({
			container: ReactDOM.findDOMNode(ref.current),
			width: 500,
			height: 500,
			defaultNode: {
			  shape: "circle",
			  size: [100],
			  color: "#5B8FF9",
			  style: {
				fill: "#9EC9FF",
				lineWidth: 3
			  },
			  labelCfg: {
				style: {
				  fill: "#fff",
				  fontSize: 20
				}
			  }
			},
			defaultEdge: {
			  style: {
				stroke: "#e2e2e2"
			  }
			}
		  });
	  }
	  graph.data(data);
	  graph.render();
	}, []);
  
	return <div ref={ref}></div>;
}

export default App;
