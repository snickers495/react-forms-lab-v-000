import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      input: "",
      lessThanMax: true;
    };
  }

  handleChange = (event)=> {
    var input = event.target.value;
    var maxChars = this.props.maxChars;
    if (input.length < maxChars) {
      this.setState({input: input})
    }
    else {this.setState({lessThanMax: false})}
  }

  render() {
    const left = this.props.maxChars - this.state.input;
    const message = this.state.lessThanMax ? `You have ${left} characters left.` : 'Error: over character limit.';
    return (
      <div>
        <strong>{message}</strong>
        <input onChange={this.handleChange} type="text" value= />
      </div>
    );
  }
}

export default TwitterMessage;
