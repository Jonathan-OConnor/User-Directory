import React, { Component } from "react";

class EmployeeCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div class="card mb-3" style={{ maxWidth: "540px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={this.props.picture} />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 className="card-title">Name: {this.props.firstName} {this.props.lastName}</h5>
                                <p className="card-text">Email: {this.props.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default EmployeeCard