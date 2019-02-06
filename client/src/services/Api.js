import axios from 'axios'
// library for http request to backend
//setting up connector to backend
export default () => {
    return axios.create({
      baseURL: 'http://localhost:8081'
    })  
    }
