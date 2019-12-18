import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class LineChart extends Component{
  
  constructor(props){
    super(props);
    this.state={
      chartData: props.chartData
    
  }
}

  render(){
    return(
      <div>
        <Line 
          data={this.props.chartData} 
          width={100}
          height={50}
          options={{
            legend: {
              labels: { 
                fontColor: "white",  
                fontSize: 18
              }
            },

            scales:{
              yAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 18,
                }
            }],
            xAxes: [{
              ticks: {
                  fontColor: "white",
                  fontSize: 18,
              }
          }]
            }
          }
          }
        />
      </div>
    );
  }
}

export default LineChart;