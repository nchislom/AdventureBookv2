import React, { Component } from 'react';
import API from "../utils/API";

class Login extends Component {
	// Setting the component's initial state
	state = {
	  userName: "",
	  password: ""
    };
    
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
      let { name, value } = event.target;
        if (name === "password") {
          value = value.substring(0, 15);
        }
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        // if (this.state.password.length < 6) {
        //   alert(
        //     `Please enter a valid password ${this.state.userName}`
        //   )
        //   if (!this.state.userName || !this.state.password) {
        //     console.log("Invalid user or password")
        //   }
        // } else {
        //   alert(`Hello ${this.state.userName}`);
        // }
        

        API.getUser(`${this.state.userName}/${this.state.password}`)
      
          .catch(err => console.log(err));
      
        this.setState({
          userName: "",
          password: ""
        });
      };
    
      render() {
        return (
          <div>
            <p>
              Login
            </p>
            <form className="form">
              <input
                value={this.state.userName}
                name="userName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="User Name"
              />
              <input
                value={this.state.password}
                name="password"
                onChange={this.handleInputChange}
                type="password"
                placeholder="Password"
              />
              <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </div>
        );
      }
    }

      export default Login