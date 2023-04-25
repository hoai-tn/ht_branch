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

export const signIn = async ({ email, password }) => {
  try {
    const result = await API.post('/user/sign-in', {
      email,
      password,
    });
    return result;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const getUserFromGoogle = async (access_token) => {
  try {
    const result = await axios.get(
      'https://www.googleapis.com/oauth2/v3/userinfo',
      {
        params: {
          access_token,
        },
      }
    );
    return result;
  } catch (error) {
    throw error
  }
};
