import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import DataBoard from './components/DataBoard';

class App extends Component{
  render(){
    return(
      <div> 	
     		<div className="row row-style">
     			<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 sidenav">
     				<div className="row left-header">
     					<h2> Location Info </h2>
     				</div>

     			</div>

     			<div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">

     				<div className="row">
     					<h2 className="text-center"> Data Visualization </h2> 
     					<hr />
     				</div>

     				<div class="row">
     					<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
     						<DataBoard boardname="Temperature" iconsrc="icon/temperature.png" type="&#8451;" />
     					</div>
     					<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
     						<DataBoard boardname="Huminity" iconsrc="icon/temperature.png" type="&#37;"/>
     					</div>
     					<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
     						<DataBoard boardname="PM2.5" iconsrc="icon/temperature.png" type="&#181;g" />
     					</div>
     					<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
     						<DataBoard boardname="PM10" iconsrc="icon/temperature.png" type="&#181;g" />
     					</div>
     				</div>
     				
     			</div>

     		</div>

      </div>
    );
  }
}

export default App;
