import axios from "axios";

const API_URL = "https://db-jokes-api-dana.onrender.com/jokes";

export const getAllJokes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error getting all jokes:", error);
    throw error;
  }
};

export const postJoke = async (newJoke) => {
  try {
    const response = await axios.post(API_URL, newJoke);
    return response.data;
  } catch (error) {
    console.error("Error posting joke:", error);
    throw error;
  }
};
