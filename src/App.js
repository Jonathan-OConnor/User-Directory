import React, { Component } from "react";
import API from "./utils/API"
import EmployeeChart from "./components/EmployeeChart"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      searchInput: ""
    };

    this.changeSearch = (event) => {
      this.setState({
        ...this.state,
        searchInput: event.target.value
      }
      );
    };
  }


  componentDidMount() {
    API.getRandomEmployees()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  }



  render() {
    return (
      <div className="container">
        <h2>Search by Name:</h2>
        <input value={this.state.searchInput} onChange={this.changeSearch}></input>
        <button>Sort Alphabetically By First Name</button>
        <EmployeeChart employeeList={this.state.employees} search={this.state.searchInput}/>
   
      </div>
    )
  }
}

export default App;

