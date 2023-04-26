import API from './api';

export const getProducts = async () => {
  try {
    const result = await API.get('/product');
    return result;
  } catch (error) {
    throw error.response.data.message;
  }
};
export const getProductByID = async (id) => {
  try {
    const result = await API.get(`/product/${id}`);
    return result;
  } catch (error) {
    throw error.response.data.message;
  }
};
