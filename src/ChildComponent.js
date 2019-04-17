import React, { Component } from 'react';

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  componentDidMount() {
    console.log("I've just been inserted");
  }

  componentWillUnmount() {
    console.log("I'm about to be removed");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("I've just been updated");
    // console.log(prevProps, this.props);
    // console.log(prevState, this.state);
    if (prevProps.colors !== this.props.color) {
      // do something
    }
    if (prevState.count !== this.state.count) {
      // do something else
    }
  }

  render() {
    console.log("I've just been rendered");
    const { color } = this.props;
    const { count } = this.state;
    return (
      <div style={{ color: color }}>
        <p>I&apos;m the child component</p>
        <button onClick={this.handleClick}>
          Count: {count}
        </button>
      </div>
    )
  }
}

export default ChildComponent;
