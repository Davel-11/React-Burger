import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-davel-db-default-rtdb.firebaseio.com/'
});

export default instance;