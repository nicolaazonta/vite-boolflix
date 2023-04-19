import { reactive } from 'vue'
import axios from 'axios'
export const store = reactive ({
    searchingText: "",
    movies: [],
    api_url_base: 'https://api.themoviedb.org/3/search/movie?api_key=',
    api_url_key: '4ae8c0c32bcb2919af3d84230c8ddb6e',
    fetchMovie(url) {

        
        axios
        .get(url)
        .then(response => {
            this.movies = response.data.results;

        })
        .catch(err => {
            console.log(err);
            console.error(err.message);
        })
    }
})