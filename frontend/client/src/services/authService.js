import axios from "axios";

const API_URL = "http://localhost:5000/api/users"; // Backend base URL

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data; // Expected: { user, token, message, etc. }
  } catch (error) {
    // Handle errors (e.g., 400 for invalid data, 409 for duplicate email)
    throw error.response?.data?.message || "Registration failed";
  }
};

// Login a user
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const { token } = response.data; // Assuming the backend returns a JWT token
    // Optionally store token in localStorage or a more secure storage
    if (token) {
      localStorage.setItem("authToken", token); // Example: Store JWT
    }
    return response.data; // Expected: { user, token, etc. }
  } catch (error) {
    // Handle errors (e.g., 401 for invalid credentials)
    throw error.response?.data?.message || "Login failed";
  }
};