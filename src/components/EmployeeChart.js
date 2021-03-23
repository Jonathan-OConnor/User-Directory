import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard"

class EmployeeChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeChart: []
        };
    }
    render(){
        var searchChart = []
        for (let i = 0; i < this.props.employeeList.length; i++){
            var sanitizedName = this.props.employeeList[i].name.first.toLowerCase() + " " + this.props.employeeList[i].name.last.toLowerCase()
            if(sanitizedName.includes(this.props.search.toLowerCase())) {
                searchChart.push(this.props.employeeList[i])
            }
        }
        return(
            <ul>
                {searchChart.map(employee => <EmployeeCard firstName={employee.name.first} lastName={employee.name.last} picture={employee.picture.large} email={employee.email}/> )}
            </ul>
        )
    }
}

export default EmployeeChart