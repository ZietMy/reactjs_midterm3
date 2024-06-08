import axios from "axios";

export const getUserApi = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const data = response.data;
    console.log(data)
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

export const searchUserApi = async (text) => {
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text} `
    );
    const data = response.data.items;
    console.log(data)
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getUserReposApi = async (id) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${id}/repos`
    );
    const data = response.data;
    console.log(data)
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};