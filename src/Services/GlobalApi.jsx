import axios from 'axios';

const movieBaseUrl = 'https://api.themoviedb.org/3/';
const api_key = `6ec2b65ecd51458f23c1028529ad719d`;

const movieByGenreBaseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`

const getTrendingVideos=axios.get(movieBaseUrl+'trending/all/day?api_key='+api_key);
const getMovieByGenreId = (id) => axios.get(movieByGenreBaseUrl+'&with_genres='+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}