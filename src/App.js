import  Graph  from './Graph'
import  Graph1  from './Graph1'
import  Graph2  from './graph2/Graph2'
import React from 'react'
import { Tabs } from 'antd';

const App = () => {
	const { TabPane } = Tabs;
	
	return(
	<Tabs defaultActiveKey="1" onChange={() => null}>
    <TabPane tab="Tab 1" key="1">
      <Graph/>
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      <Graph1/>
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      <Graph2/>
    </TabPane>
	</Tabs>
	)

}

export default App;