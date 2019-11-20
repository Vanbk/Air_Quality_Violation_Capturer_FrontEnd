import React, {Component} from 'react';
import '../App.css';

class DataBoard extends Component{

  constructor(props){
    super(props);
    this.state = {value: 50};
  }

  render (){
    return(
      <div className="panel panel-default data-board">
                <div className="panel-body">
                  <div className="row">
                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                      <h3>{this.props.boardname}</h3>
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                      <img src={this.props.iconsrc} height="60" width="80" />
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <h1 className="text-center"><font size="30">{this.state.value}</font></h1>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <h1><font size="20">{this.props.type}</font></h1>
                    </div>
                  </div>

                </div>
              </div>

    );
  }
}

export default DataBoard;