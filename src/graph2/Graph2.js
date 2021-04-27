import React, {useEffect} from 'react';
import {colors, data, strokes} from './Data'

import G6 from '@antv/g6';
import ReactDOM from 'react-dom';

const Graph2 = () => {
const ref = React.useRef(null);
const nodes = data.nodes;
const clusterMap = new Map();
let clusterId = 0;
	
nodes.forEach(node => {
  if (node.cluster && clusterMap.get(node.cluster) === undefined) {
    clusterMap.set(node.cluster, clusterId);
    clusterId++;
  }
  const cid = clusterMap.get(node.cluster);
  if (!node.style) {
    node.style = {};
  }
  node.style.fill = colors[cid % colors.length];
  node.style.stroke = strokes[cid % strokes.length];
});
	
	useEffect(() => {
		const container = document.getElementById('root');
		const width = container.scrollWidth;
		const height = container.scrollHeight || 500;
		const graph = new G6.Graph({
			container,
			width: 1000,
			height: 1000,
			modes: {
				default: ['drag-canvas', 'drag-node'],
			  },
			animate: false,
			defaultNode: {
			  size: 20,
			  style: {
				lineWidth: 2,
			  },
			},
			defaultEdge: {
			  size: 1,
			  color: '#e2e2e2',
			  style: {
				endArrow: {
				  path: 'M 0,0 L 8,4 L 8,-4 Z',
				  fill: '#e2e2e2',
				},
			  },
			},
			layout: {
			  type: 'fruchterman',
			  gpuEnabled: true,
			  clustering: true,
			  maxIteration: 300,
			},
		});
		
		graph.data(data);
		graph.render();
		graph.fitView();
		
		
	}, [])

	return <div ref={ref}></div>;
}

export default Graph2;