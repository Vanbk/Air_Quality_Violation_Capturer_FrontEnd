import React, {Component} from 'react';
import '../App.css';

class ControlBoard extends Component{

  constructor(props){
    super(props);
  }

  startHandler(){
    const urlCurrentData = "http://localhost:9000/data/control?id=199&bt1State=1&bt2State=1";
    const response = fetch(urlCurrentData);
    console.log("clicked button")
  }

  stopHandler(){
    const urlCurrentData = "http://localhost:9000/data/control?id=199&btState=0&bt2State=0";
    const response = fetch(urlCurrentData);
    console.log("clicked button")
  }

  render (){
    return(
      <div className="panel panel-default control-board">
          <div className="panel-body">
              <div className="row"> 
                  <h2 className="text-center white-text">Capture</h2>
                  <hr />
              </div>
              <div className="row">
                  <button onClick={()=>this.startHandler()} className="button">Start</button>
                  <hr />
              </div>

              <div className="row">
                  <button onClick={()=> this.stopHandler()} className="button" style={{backgroundColor: 'red'}}>Stop</button>
              </div>
          </div>
      </div>

    );
  }
}

export default ControlBoard;