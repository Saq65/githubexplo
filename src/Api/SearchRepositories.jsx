import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const SearchRepositories = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/repositories?q=${query}`);
    return response.data.items;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
};
