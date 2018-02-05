import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      password: ''
    };
  }

  handleText= (event)=> {
    this.setState({text: event.target.value})}
  }
  handlePassword = (event) => {
    if (event.target.value) {
    this.setState({password: event.target.value})}
  }


  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.handleText} id="test-username" type="text" value={this.state.text} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handlePassword} id="test-password" type="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
