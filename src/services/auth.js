import axios from 'axios';

const API_URL = 'https://dummyjson.com/auth'; // Replace with your actual API URL

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    console.log('repnse',response.data.token)
    return response.data.token;
      } catch (error) {
    throw error;
  }
};

