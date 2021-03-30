import axios from 'axios';

const instance = new axios.create({
  baseURL: ''
})

export default instance;