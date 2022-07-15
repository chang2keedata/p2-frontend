import React from 'react'

export default class Form extends React.Component {

    state = {
        'firstName': '',
        'lastName': ''

    }

    updateName = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                {/* <label>First Name:</label> */}
                    <input type="text" 
                           className="form-control mt-1"
                           name="firstName"
                           placeholder="First Name"
                           value={this.state.firstName}
                           onChange={this.updateName}
                    />
                </div>
                <div>
                {/* <label>Last Name:</label> */}
                    <input type="text" 
                           className="form-control mt-1"
                           name="lastName"
                           placeholder="Last Name"
                           value={this.state.lastName}
                           onChange={this.updateName}
                    />
                </div>
                <hr />
                <h2>Entered information:</h2>
                <p>Your first name: {this.state.firstName}</p>
                <p>Your last name: {this.state.lastName}</p>
            </div>
        )
    }


}