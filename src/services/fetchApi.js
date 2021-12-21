import axios from 'axios';
// import PropTypes from 'prop-types';

const KEY = '0e404470b8bfa545e116d322707977aa';
const BASE_URL = 'https://api.themoviedb.org/3/';
const language = 'en-US';

export const fetchTrend = () => {
    return axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}&language=${language}`)
    .then(r => r.data.results);
};

export const fetchMovie= () => {
    return axios.get(`${BASE_URL}genre/movie/list?api_key=${KEY}&language=${language}`)
    .then(r => r.data.results);
};

export const fetchCast= () => {
    return axios.get(`${BASE_URL}genre/movie/list?api_key=${KEY}&language=${language}`)
    .then(r => r.data.results);
};

export const fetchReviews = () => {
    return axios.get(`${BASE_URL}genre/movie/list?api_key=${KEY}&language=${language}`)
    .then(r => r.data.results);
};

export const fetchSearches = () => {
    return axios.get(`${BASE_URL}genre/movie/list?api_key=${KEY}&language=${language}`)
    .then(r => r.data.results);
};
