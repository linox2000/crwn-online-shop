import './sign-up-form.styles.scss';

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
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormField();
    } catch (error) {
      alert("error creating a user");
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
        <h2>Don't have an account</h2>
      <span>Sign up with ypur email and password</span>
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
    </div>
  );
};

export default SignUpForm;
