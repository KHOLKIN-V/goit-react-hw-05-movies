import axios from 'axios';
// import PropTypes from 'prop-types';

const KEY = '0e404470b8bfa545e116d322707977aa';
const BASE_URL = 'https://api.themoviedb.org/3/';
const language = 'en-US';

export const fetchTrend = () => {
    return axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}&language=${language}`)
    .then(r => r.data.results);
};

export const fetchMovie = (movId) => {
    return axios.get(`${BASE_URL}movie/${movId}?api_key=${KEY}`)
    .then((r) => r.data);
};

export const fetchCast = (movId) => {
    return axios.get(`${BASE_URL}/movie/${movId}/credits?api_key=${KEY}`)
    .then(r => r.data.cast);
};

export const fetchReviews = (movId) => {
    return axios.get(`${BASE_URL}/movie/${movId}/reviews?api_key=${KEY}`)
    .then(r => r.data.results);
};

export const fetchSearches = (query) => {
    return axios.get(`${BASE_URL}search/movie?api_key=${KEY}&query=${query}`)
    .then(r => r.data.results);
};
