import {ButtonsContainer,SignUpContainer}from "./sign-in-form.styles.jsx";

import { useState } from "react";

import {
  

  siginInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormField] = useState(defaultFormFields);
  const { email, password } = formFields;

  

  

const signInWithGoogle = async () => {
     await siginInWithGooglePopup();
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

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
    <SignUpContainer >
      <h2>Já Tenho Uma Conta</h2>
      <span>Entrar Com  Email e Password</span>
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
        <ButtonsContainer >
          <Button type="submit">Sign in</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
            Google sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;
