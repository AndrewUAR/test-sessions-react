import React, { Component } from 'react';
import axios from 'axios';

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    }
  }

  handleSubmit = (event) => {
    const {email, password} = this.state
    axios.post("http://localhost:3001/sessions", {
      user: {
        email: email,
        password: password
      }
    }, { withCredentials: true })
      .then(response => {
        if(response.data.logged_in) {
          this.props.handleSuccessfulAuth(response.data);
        }
        // if(response.data.status === 'created') {
        //   this.props.handleSuccessfulAuth(response.data);
        // }
      })
      .catch(error => {
        console.log("login error", error)
      })
    event.preventDefault();
  }

  handleChange = (event) => {
    console.log("handle change" , event);
    this.setState({
      [event.target.name]: event.target.value
    })
    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={this.state.email} 
            onChange={this.handleChange} 
            required
          />

          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={this.state.password} 
            onChange={this.handleChange} 
            required
          />


          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Registration;