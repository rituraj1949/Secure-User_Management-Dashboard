import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

type SignUpFormData = {
  email: string;
  password: string;
};

const SignUpPage: React.FC = () => {
  const { handleSubmit, register } = useForm<SignUpFormData>();

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    try {
      // Simulate an API call (replace with your actual API endpoint)
      const response = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('User registered successfully!');
        // Redirect to the dashboard or show a success message
      } else {
        console.error('Error registering user:', response.statusText);
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle other errors (e.g., network issues)
    }
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
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpPage;
