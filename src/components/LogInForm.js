import React from "react";
import './LogInForm.js'

export default class LoginForm extends React.Component {
    render() {
      return(
        <form>
          <label>
            <p>Username</p>
            <input type="text"/>
            </label>

            <label>
              <p>Password</p>
              <input type="password"/>
              </label>
        </form>
      )
    }
  }