import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import DataBoard from './components/DataBoard';
import ControlBoard from './components/ControlBoard';
import Chart from './components/Chart';
import LineChart from './components/LineChart';
import ChartComponent from 'react-chartjs-2';
import Information from './components/Information';

class App extends Component {
	constructor(props) {
		super();
		this.state = {
			currentPara: {},
			chartData: {}
		}
	}

	componentWillMount() {
		//const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
		//const data = [15, 20, 26, 20, 25, 29, 28];
		//this.getChartData(labels, data);
	}
	async componentDidMount() {
		const urlCurrentData = "http://localhost:9000/data/currentdata";
		//const urlChartData   = "http://localhost:9000/data/chartData";
		const urlChartData   = "http://localhost:9000/data/chart/all?id=199&type=2";
		setInterval(async () => {
			const response = await fetch(urlCurrentData);
			const data = await response.json();
			//console.log('data', data.currentPara)
			this.setState({ currentPara: data.currentData });
			//console.log('state', this.state.currentPara)
		}, 2000);

		setInterval(async () => {
			const response = await fetch(urlChartData);
			const xdata = await response.json();
			console.log(xdata);
			//console.log('data', data.chartData);
			//this.getChartData(xdata.chartData.labels, xdata.chartData.values);
			this.getChartData(xdata.extractedData.labels, xdata.extractedData.values);
		}, 2000);
	}

	getChartData(setlabel, setdata) {
		this.setState({
			chartData: {
				labels: setlabel,
				datasets: [
					{
						label: 'PM2.5 Concentration Over Time',
						fill: true,
						lineTension: 0.1,
						backgroundColor: 'rgba(75,192,192,0.4)',
						borderColor: 'rgba(75,192,192,1)',
						borderCapStyle: 'butt',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJoinStyle: 'miter',
						pointBorderColor: 'rgba(75,192,192,1)',
						pointBackgroundColor: '#fff',
						pointBorderWidth: 1,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: 'rgba(75,192,192,1)',
						pointHoverBorderColor: 'rgba(220,220,220,1)',
						pointHoverBorderWidth: 2,
						pointRadius: 1,
						pointHitRadius: 10,
						data: setdata
					}

				]
			}
		});
	}

	render() {
		return (
			<div>
				<div className="row row-style">
					<div className="row">
						<h1 className="text-center white-text"> Air Quality Violation Capturer</h1>
						<hr />
					</div>
				
				<div className="row">
					<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
						<Information />
					</div>
					<div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
						<div className="row">
							<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
								<DataBoard boardname="Temperature" iconsrc="icon/temperature.png" type="&#8451;" 
									value={this.state.currentPara.temperature}/>
							</div>
							<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
								<DataBoard boardname="Humidity" iconsrc="icon/humidity.png" type="&#37;" 
									value={this.state.currentPara.humidity}/>
							</div>
							<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
								<DataBoard boardname="PM2.5" iconsrc="icon/dust.png" type="&#181;g" 
									value={this.state.currentPara.pm25}/>
							</div>
							<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
								<DataBoard boardname="PM10" iconsrc="icon/dustpm10.png" type="&#181;g"
									value={this.state.currentPara.pm10} />
							</div>
						</div>
						<div className="row">
							<div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
								<LineChart chartData={this.state.chartData} />
							</div>

							<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
								<ControlBoard />
							</div>
						</div>
						<Chart />
						<button className="button">ON</button>
					</div>
				</div>
				</div>

			</div>
		);
	}
}

export default App;
