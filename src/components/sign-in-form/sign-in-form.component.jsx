import "./sign-in-form.styles.scss";

import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  siginInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const signInWithGoogle = async () => {
    const { user } = await siginInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const [formFields, setFormField] = useState(defaultFormFields);

  const { email, password } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect  password for email ");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email ");
          break;
        default:
          console.log(error);
      }
    }
  };
  const resetFormField = () => {
    setFormField(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormField({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>I already have an account</h2>
      <span>Sign with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          onChange={handleChange}
          name="email"
          required
          type="email"
          value={email}
        />

        <FormInput
          label="Password"
          onChange={handleChange}
          name="password"
          required
          type="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type='button' buttonType="google" onClick={signInWithGoogle}>
            Google sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
