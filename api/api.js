const axios = require('axios');

const api = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes'
});


module.exports = api;