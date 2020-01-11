import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burger-queen-c7379.firebaseio.com/'
})

export default instance