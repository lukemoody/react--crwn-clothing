import React, { Component } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './signin.styles.scss';

/**
 * Class Component
 * We have to store users typing in
 */
class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // these are form fields stored in state
      email: '',
      password: ''
    };
  }

  /**
   * Method for handling form submission
   * Arrow function so that this means this inside of it
   * Passes down data to sub components for inputs and buttons
   */
  handleSubmit = async e => {
    // 1 Prevent default form action
    e.preventDefault();

    // For signIn with email/password setState if successful or log error
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }

    // 2. clear out fields back to an empty string
    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    // 1. pull both value and name from inputs (destructure)
    const { value, name } = e.target;
    // 2. name gets the name value from input and value gets the value of that input, based on name.
    //    this allows the same method to be called on different inputs and work for each on - don't
    //    have to write multiple methods.
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            /**
             * This input Component is passing all required user data down a level.
             * It renders both an input and label (if required)
             * Submit button is it's own reusable component thats passes down props
             */
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {' '}
              Sign in with Google{' '}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
