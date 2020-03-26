import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-2020.firebaseio.com/'
});

export default instance;