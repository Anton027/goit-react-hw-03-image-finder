import Axios from 'axios';

const KEY = '28335791-424c8601599ee033f1407bf36';
const BASE_URL = 'https://pixabay.com/api/';

export function baseFetch() {
    return Axios.get(`${BASE_URL}?key=${KEY}`);
}
export function updateFetch(imageName, page) {
    return Axios.get(`${BASE_URL}?key=${KEY}&q=${imageName}&page=${page}`);
}