import axios from 'axios';

const env = process.env.REACT_APP_KEY;


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: env
    }
});