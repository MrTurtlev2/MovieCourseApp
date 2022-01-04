import axios from 'axios';

const API = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=ff50baa59a96c64b8d7de41b804d51f0';

export const getPopularMovies = async () => {
    const resp = await axios.get(`${API}/movie/popular?${API_KEY}`);
    return resp.data.results;
};

export const getUpcomingMovies = async () => {
    const resp = await axios.get(`${API}/movie/upcoming?${API_KEY}`);
    return resp.data.results;
};
export const getPopularTv = async () => {
    const resp = await axios.get(`${API}/tv/popular?${API_KEY}`);
    return resp.data.results;
};
