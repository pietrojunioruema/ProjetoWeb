import React, { Component } from 'react';
import api from './api';
import './App.css';
import { Doughnut } from 'react-chartjs-2';
class App extends Component {
  state = {
    status: [],
  }
  async componentDidMount() {
    const response = await api.get('');

    this.setState({ status: response.data });
  }
  render() {
    //constante do back não mecher.
    const { status } = this.state;
    //
    //constante do gráfico//
    const data = {
      labels: ['Red', 'Green', 'Yellow'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }
      ]
    };
    //


    return (

    <div >

   
    
<ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
        {status.map(status => (
          <div>


<div className="flex flex-col items-center w-full max-w-md"  class="container">
				<Doughnut data={data} />
			</div>
            <p>
              {status.country}
            </p>
            <p>
              {status.last_update}
            </p>
            <p>
              {status.cases}
            </p>
            <p>
              {status.deaths}
            </p>
            <p>
              {status.recovered}
            </p>
            </div>
        ))}
      </div>
    );
  };
};
export default App;