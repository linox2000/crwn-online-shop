import {SignUpContainer}from './sign-up-form.styles';

import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";


import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component';



const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormField] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("password do not  Match");
      return;
    }

    try {
      const {user} = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      
      
      await createUserDocumentFromAuth(user, { displayName });
      
      resetFormField();
      
    } catch (error) {
      switch(error.code){
        case'auth/email-already-in-use':
        alert('error creating a user Email already in Use')
        break;
        default:
          console.log("error creating a user",error.message);
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
    <SignUpContainer>
        <h2>Não Tenho uma Conta</h2>
      <span>Cadastrar Com Email Password</span>
      <form onSubmit={handleSubmit}>
      
        <FormInput label= 'display Name'
          name="displayName"
          onChange={handleChange}
          required
          type="text"
          id="displayName"
          value={displayName}
        />

       
        <FormInput label= 'Email'
          onChange={handleChange}
          name="email"
          required
          type="email"
          id="email"
          value={email}
        />

      
        <FormInput label='Password'
          onChange={handleChange}
          name="password"
          required
          id="password"
          type="password"
          value={password}
        />

    
        <FormInput label='Confirm Password'
          onChange={handleChange}
          required
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
