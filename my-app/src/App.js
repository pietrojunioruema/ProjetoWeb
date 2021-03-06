import React, { Component } from 'react';
import api from './api';
import './App.css';
import { Doughnut } from 'react-chartjs-2';
import { RiSlideshowLine } from 'react-icons/ri';
import { RiHandSanitizerLine } from 'react-icons/ri';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
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




    return (

    <div class="center"> 
  <ul>
    <li><a class="active" href="/"><h3>Painel <RiSlideshowLine size={20}/></h3></a></li>
    <li><a class="active" href="/"><h3>Como se proteger <RiHandSanitizerLine size={20}/></h3></a></li>
    <li><a class="active" href="/"><h3>Sobre <AiOutlineQuestionCircle size={20}/></h3></a></li>

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
          backgroundColor: ['#B0C4DE', '#FFC0CB', '#66CDAA'],
          hoverBackgroundColor: ['#B0C4DE', '#FFC0CB', '#66CDAA']
        }
      ]
    }} />
			</div>
      <div id="box1"></div>




            </div>
        ))}
      </div>
    );
  };
};
export default App;