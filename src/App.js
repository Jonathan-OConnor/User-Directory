import React, { Component } from "react";
import API from "./utils/API"
import EmployeeChart from "./components/EmployeeChart"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      searchInput: "",
      alphabetical: false
    };

    this.changeSearch = (event) => {
      this.setState({
        ...this.state,
        searchInput: event.target.value
      }
      );
    };
    this.toggleAlphabet = (event) =>{
      event.preventDefault()
      this.setState({
        ...this.state,
        alphabetical: true
      })
    }
  }


  componentDidMount() {
    API.getRandomEmployees()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  }



  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>Search by Name:</h2>
          <input value={this.state.searchInput} onChange={this.changeSearch}></input>
          <button className="btn btn-primary" onClick={this.toggleAlphabet}>Sort Employees Alphabetically</button>
        </div>

        <EmployeeChart employeeList={this.state.employees} search={this.state.searchInput} alphabetical={this.state.alphabetical}/>

      </div>
    )
  }
}

export default App;
