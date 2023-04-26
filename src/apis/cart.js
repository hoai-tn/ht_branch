import API from './api';

export const addToCart = async ( userId, productId ) => {
  try {
    const result = await API.post('/cart/add', { userId, productId });
    return result;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const getCart = async (userId ) => {
  try {
    const result = await API.get(`/cart/${userId}`);
    return result;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const removeCart = async ({ userId, productId }) => {
  try {
    const result = await API.post('/cart/remove', { userId, productId });
    return result;
  } catch (error) {
    throw error.response.data.message;
  }
};
