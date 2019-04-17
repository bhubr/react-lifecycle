import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChild: false,
      color: 'red'
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  toggleShow() {
    this.setState(prevState => ({
      showChild: !prevState.showChild
    }));
  }

  changeColor(e) {
    const color = e.target.id;
    this.setState({
      color: color
    });
  }

  render() {
    const { showChild, color } = this.state;
    const btnLabel = showChild
      ? 'Hide child'
      : 'Show child';
    return (
      <div className="App">
        {/* Toggle show child */}
        <div>
          <button
            type="button"
            onClick={this.toggleShow}
          >
            {btnLabel}
          </button>
        </div>
        {/* Choose color */}
        <div>
          <button type="button" id="red" onClick={this.changeColor}>Red</button>
          <button type="button" id="green" onClick={this.changeColor}>Green</button>
          <button type="button" id="blue" onClick={this.changeColor}>Blue</button>
        </div>
        {
          showChild && <ChildComponent color={color} />
        }
      </div>
    );
  }
}

export default App;
