import axios from 'axios'

const apiRest = axios.create({
  baseURL: 'http://localhost:5000/',
})

export default apiRest
