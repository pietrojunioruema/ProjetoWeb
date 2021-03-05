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
 
    //


    return (

    <div class="center"> 
<ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
        {status.map(status => (
          <div>
            <p>
              País: {status.country}
            </p>
            <p>
              Última atualização: {status.last_update}
            </p>
<div className="flex flex-col items-center w-full max-w-md"  class="container">
				<Doughnut data={{
      labels: ['Casos: '+status.cases , 'Mortes: '+status.deaths, 'Recuperados: '+status.recovered],
      datasets: [
        {
          data: [status.cases, status.deaths, status.recovered],
          backgroundColor: ['yellow', 'black', 'green'],
          hoverBackgroundColor: ['yellow', 'black', 'green']
        }
      ]
    }} />
			</div>
            </div>
        ))}
      </div>
    );
  };
};
export default App;