import React from 'react';
import ReactDOM from 'react-dom';

// First Component
class App extends React.Component {
  render() {
    return <h1> Hello WOrld</h1>;
  }
}

// Render first Component
ReactDOM.render(<App />, document.querySelector('#app'));
