import axios from 'axios';
import API from './api';

export const signUp = async ({ name, email, password }) => {
  try {
    const result = await API.post('/user/sign-up', {
      name,
      email,
      password,
    });
    return result;
  } catch (error) {
    throw error.response.data.message;
  }
};
