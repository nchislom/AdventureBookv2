import React, { Component } from 'react';
import API from "../utils/API";
import "./style.css";

class Register extends Component {
	// Setting the component's initial state
	state = {
		firstName: "",
		lastName: "",
		userName: "",
		password: ""
	};

	handleInputChange = event => {
		// Getting the value and name of the input which triggered the change
		//   let value = event.target.value;
		//   const name = event.target.name;
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
		if (!this.state.firstName || !this.state.lastName) {
			alert("Please fill out all of the forms ");
		} else if (this.state.password.length < 6) {
			alert(
				`Your password needs to be at least six characters ${this.state.firstName} ${this.state
					.lastName}`
			);
		} else {
			alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
		}

		API.saveUser({
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			userName: this.state.userName,
			password: this.state.password
		})
			// .then(res => this.getUsers())
			.catch(err => console.log(err));

		this.setState({
			firstName: "",
			lastName: "",
			userName: "",
			password: ""
		});
	};
  
		render() {
	  // Notice how each input has a `value`, `name`, and `onChange` prop
	  return (
		<div className="bg">
			<p className="admin-font">
				Register
		  </p>
			<form className="pure-form pure-form-stacked centered-form">
				<input
					className="form-input-centered"
					value={this.state.firstName}
					name="firstName"
					onChange={this.handleInputChange}
					type="text"
					placeholder="First Name"
				/>
				<input
					className="form-input-centered"
					value={this.state.lastName}
					name="lastName"
					onChange={this.handleInputChange}
					type="text"
					placeholder="Last Name"
				/>
				<input
					className="form-input-centered"
					value={this.state.userName}
					name="userName"
					onChange={this.handleInputChange}
					type="text"
					placeholder="User Name"
				/>
				<input
					className="form-input-centered"
					value={this.state.password}
					name="password"
					onChange={this.handleInputChange}
					type="password"
					placeholder="Password"
				/>
				<button className="pure-button pure-button-primary" onClick={this.handleFormSubmit}>Submit</button>
			</form>
			const BackgroundImagePage = () => {
  		 
      <div className="bg"></div>
  
}
		</div>
		);
	  }
	}
    
export default Register;
