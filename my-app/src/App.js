import React, { Component } from 'react';
import api from './api';
import './App.css';
class App extends Component {
  state = {
    status: [],
  }
  async componentDidMount() {
    const response = await api.get('');

    this.setState({ status: response.data });
  }
  render() {
    const { status } = this.state;
    return (
    <div>
<ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
        {status.map(status => (
          <div>
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