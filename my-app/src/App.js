import React, { Component } from 'react';
import api from './api';

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
        <h1>Página Principal!</h1>
        {status.map(status => (
          <li>
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
          </li>
        ))}
      </div>
    );
  };
};

export default App;