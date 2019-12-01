import React from 'react';
import SignIn from '../../components/signin/signin.component';
import './signinup.styles.scss';
import SignUp from '../../components/sign-up/sign-up.component';

/**
 * Functional component
 * Reason for using a functional component instead of a stateful or class component
 * is because were going to keep all that on our SignInUp component respecfully
 */
const SignInUp = () => (
  <div className="sign-in-and-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInUp;
