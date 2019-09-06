import React from 'react';
import SignIn from '../../components/signin/signin.component';
import './signinup.styles.scss';

/**
 * Functional component
 * Reason for using a functional component instead of a stateful or class component
 * is because were going to keep all that on our SignInUp component respecfully
 */
const SignInUp = () => (
  <div className="sign-in-and-up">
    <SignIn />
  </div>
);

export default SignInUp;
