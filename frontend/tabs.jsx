import React from 'react';
import Root from './root';

class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {activeTab: 0};
    this.activeTab = this.activeTab.bind(this);
  }

    activeTab(num) {
      this.setState({activeTab: num})
      let alltabs = document.getElementsByClassName('tab-titles')
      let allTabsArr = Array.from(alltabs);

      allTabsArr.forEach( (eachtab) => {eachtab.classList.remove("bold") }
      )

      let currentTab = document.getElementById(num)
      currentTab.classList.add("bold")
    }


  render() {
    const tab = this.props.tabs[this.state.activeTab];

    return (
      <div> 
        <h1> Tabs </h1>
        <div className='tabs'>
          { this.props.tabs.map( (tab, idx) => (
              <div id={idx} class='tab-titles' onClick={ () => { this.activeTab(idx)  } }> {tab.title} </div>
          )
          
          ) }
          <br/>
          <div className="tabcontent"> {tab.content} </div> 
        </div>
      </div>
      ) 

  } 



}

export default Tabs;