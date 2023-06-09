import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link className="btn btn-link" to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="firstName" class="form-label mt-4">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName" class="form-label mt-4">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email" class="form-label mt-4">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd" class="form-label mt-4">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div>
          <button className="btn btn-primary mt-4" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;