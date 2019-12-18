import React, {Component} from 'react';
import '../App.css';

class Information extends Component{

  render (){
    return(
        <div className="panel panel-default information-board">
            <div className="panel-body">
                <div className="row">
                    <div className="text-center white-text text-align-bottom"><font size="6">Information</font></div>
                    <hr />
                </div>
                <div className="row">
                    <img src="icon/kaist.png" className="img-circle image-center" width="90" height="90" /> 
                    <h6 className="text-center white-text">Staff Name: Anh Van Vu</h6>
                    <h6 className="text-center white-text">Position: Environmental Police</h6>
                    <hr />
                </div>

                <div className="row">
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle button-center" type="button" data-toggle="dropdown"> Location
                        <span className="caret"></span></button>
                        <ul className="dropdown-menu">
                        <li><a href="#">Deajeon</a></li>
                        <li><a href="#">Seoul</a></li>
                        <li><a href="#">Busan</a></li>
                        </ul>
                    </div>
                    <br />
                </div>

                <div className="row">
                <ul className="list-group list-info">
                    <li className="list-group-item">
                        <p><span className="glyphicon glyphicon-map-marker"></span>: Deajeon</p>  
                    </li>
                    <li className="list-group-item">
                        <p><span className="glyphicon glyphicon-cloud"></span>: Good Weather</p>
                    </li>
                    <li className="list-group-item">
                        <p><span className="glyphicon glyphicon-user"></span>: Chemical Factory</p>
                    </li>
                    <li className="list-group-item">
                        <p><span className="glyphicon glyphicon-off"></span>: Device Online</p>
                    </li>
                    <li className="list-group-item">
                        <p><span className="glyphicon glyphicon-signal"></span>: Good Signal</p>
                    </li>
                </ul>
                </div>

                <div className="row">
                <p>
                    <a href="#" className="btn btn-info btn-lg record-button">
                        <span className="glyphicon glyphicon-floppy-save"></span>Violation Recrd
                    </a>
                </p> 
                </div>
            </div>   
            </div>
        
    );
  }
}

export default Information;