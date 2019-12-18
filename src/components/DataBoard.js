import React, {Component} from 'react';
import '../App.css';

class DataBoard extends Component{

  constructor(props){
    super(props);
    this.state = {
      value: props.value
    }
  }

  render (){
    return(
      <div className="panel panel-default data-board">
                <div className="panel-body">
                  <div className="row">
                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                      <h3 className="white-text">{this.props.boardname}</h3>
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                      <img src={this.props.iconsrc} height="60" width="80" />
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                      <h1 className="text-center white-text"><font size="30">{this.props.value}</font></h1>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                      <h1 className="white-text"><font size="20">{this.props.type}</font></h1>
                    </div>
                  </div>

                </div>
              </div>

    );
  }
}

export default DataBoard;