import axios from 'axios';

const instance = axios.create({
    baseURL:'https://tinder-app-test.herokuapp.com'
});

export default instance;