import React, { Component } from "react";
import API from "./utils/API"


class App extends Component {
  state = {
    employees: [],
    searchInput: "",
  }

  componentDidMount() {
    API.getRandomEmployees()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  }



  render() {
    return (
      <div>
        <form>
          <input value={this.state.searchInput}></input>
        </form>
        <h1>test1</h1>
      </div>
    )
  }
}

export default App;
