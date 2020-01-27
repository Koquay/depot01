import axios from 'axios';

const setAuthInterceptor = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['token'] = token;
    console.log('token', token)
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthInterceptor;
