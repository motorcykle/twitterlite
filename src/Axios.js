import axios from 'axios';

const instance = new axios.create({
  baseURL: 'http://localhost:7700'
})

export default instance;