import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default class App extends React.Component {
  state = {
    firstname: "",
    lastname: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const { firstname, lastname } = this.state;
    alert(`firstname=${firstname}&lastname=${lastname}`);
  };
  render() {
    const { firstname, lastname } = this.state;
    return (
      <>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="firstname" onChange={this.onChange} />
          <input type="text" name="lastname" onChange={this.onChange} />
          <button type="submit">submit</button>
        </form>
        <p>firstName: {firstname}</p>
        <p>lastName: {lastname}</p>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
