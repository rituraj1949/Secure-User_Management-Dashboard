// SignInPage.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

type SignInFormData = {
  email: string;
  password: string;
};

const SignInPage: React.FC = () => {
  const { handleSubmit, register } = useForm<SignInFormData>();

  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    console.log('Sign In Data:', data);
    // Handle sign-in logic (e.g., API call)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        {...register('email')}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        {...register('password')}
      />
      <Button type="submit" variant="contained" color="primary">
        Sign In
      </Button>
      <Link to="/SignUpPage">Don't have an account? Sign up</Link>
    </form>
  );
};

export default SignInPage;

