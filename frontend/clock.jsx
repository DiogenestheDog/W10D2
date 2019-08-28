import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {date: new Date()};
  }

 

  tick() {
    this.setState( { date: new Date() } ) ;

  }


  componentDidMount() {
    this.timer = setInterval(this.tick.bind(this), 1000);
  }

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  //   this.timer = 0;
  // }


  render() {
    return (
      <div id="tocenter"> 
      <div id="time">
    <h1 className="title">Check Out that Clock</h1>
        <h3 id="clockdisplay">{this.state.date.getHours()}: {this.state.date.getMinutes()}: {this.state.date.getSeconds()} 
        </h3>
        <h1 className="date-title">The Date </h1>
        <h3 id="datedisplay">{this.state.date.getMonth()} / {this.state.date.getDay()} / {this.state.date.getFullYear()}
        </h3>
     </div>
      </div>
    )
  }


}

export default Clock;