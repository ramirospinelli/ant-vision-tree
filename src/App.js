import  Graph  from './Graph'
import  Graph1  from './Graph1'
import Graph2 from './graph2/Graph2'
import MindMap  from './mindmap/MindMap'
import React from 'react'
import { Tabs } from 'antd';

const App = () => {
	const { TabPane } = Tabs;
	
	return(
	<Tabs defaultActiveKey="1" onChange={() => null}>
    <TabPane tab="nodes" key="1">
      <Graph/>
    </TabPane>
    <TabPane tab="colapse-expand" key="2">
      <Graph1/>
    </TabPane>
    <TabPane tab="drag node" key="3">
      <Graph2/>
	</TabPane>
	<TabPane tab="Mind map" key="4">
		<MindMap/>
    </TabPane>
	</Tabs>
	)

}

export default App;