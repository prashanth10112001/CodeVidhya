import axios from "axios";

const API_URL = "http://localhost:5000";

export const getDsaData = async () => {
  try {
    const response = await axios.get(`${API_URL}/dsaData`);
    return response;
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};

// export const getLanguages = async () => {
//   const response = await axios.get(`${API_URL}/languages`); // Corrected line
//   return response.data;
// };

// export const getDsaData = async () => {
//   const response = await axios.get(`${API_URL}/dsa`); // Corrected line
//   return response.data;
// };

// export const getDsaDataTopics = async (id) => {
//   const response = await axios.get(`${API_URL}/dsaTopics`); // Corrected line
//   // const response = await axios.get(`${API_URL}/mobile/${id}`); // Corrected line
//   return response.data;
// };
