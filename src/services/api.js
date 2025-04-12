import axios from 'axios';

// Get base URL from environment and add /auth path
const API_BASE_URL = `${process.env.REACT_APP_BACKEND_URL}/auth`;

export const getUserProfile = async (accessToken) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/profile`, {
      params: { accessToken },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};

export const getUserFeed = async (accessToken) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/feed`, {
      params: { accessToken },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching feed:', error);
    throw error;
  }
};

export const getPostComments = async (postId, accessToken) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts/${postId}/comments`, {
      params: { accessToken },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching comments for post ${postId}:`, error);
    throw error;
  }
};

export const replyToComment = async (postId, commentId, message, accessToken) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/posts/${postId}/comments/${commentId}/replies`,
      { message },
      { params: { accessToken } }
    );
    return response.data;
  } catch (error) {
    console.error(`Error replying to comment ${commentId} on post ${postId}:`, error);
    throw error;
  }
};
