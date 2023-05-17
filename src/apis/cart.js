import API from './api';

export const addToCart = async ( userId, product ) => {
  try {
    const result = await API.post('/cart/add', { userId, product });
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
    console.log(error);
    throw error.response.data.message;
  }
};

export const removeCart = async ({ userId, productId, quantity }) => {
  try {
    const result = await API.post('/cart/remove', { userId, productId, quantity });
    return result;
  } catch (error) {
    throw error.response.data.message;
  }
};
