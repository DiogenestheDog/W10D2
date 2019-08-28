import React from "react";


import Clock from "./clock";
import Tabs from "./tabs";
import Weather from "./weather"



const tabs = [{title: 'tab1', content: 'tab1 contenttttttt'},
  { title: 'tab2', content: 'Another content' },
  { title: 'tab3', content: 'And another one --Dj Khaled' }];

const Root = (props) => {
  return (
    <div> 
      <Clock />
      <Weather />
      <Tabs tabs={tabs}/> 
    </div>
  )

};

export default Root;