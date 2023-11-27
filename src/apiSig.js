import axios from 'axios';

const apiSig = axios.create({
    baseURL: 'https://api.unilab.edu.br/api/'
});

export default apiSig;