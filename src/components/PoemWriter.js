import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      isValid
    };
  }
  handleChange = (event)=> {
    var input = event.target.value;
    var [line1, line2, line3] = input.split('\n');
    this.setState({poem: input})
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange}/>
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;
