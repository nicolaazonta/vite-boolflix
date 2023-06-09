import { reactive } from 'vue'
import axios from 'axios'
export const store = reactive ({
    searchingText: "",
    lang: null,
    movies: [],
    tvShows: [],
    
    api_url_img:'https://image.tmdb.org/t/p/w342/',
    api_url_base_tvShow: 'https://api.themoviedb.org/3/search/tv?api_key=',
    api_url_base_movie: 'https://api.themoviedb.org/3/search/movie?api_key=',
    api_url_key: '4ae8c0c32bcb2919af3d84230c8ddb6e',

    averageStars(decimal_vote){

        const five_vote = Math.round(decimal_vote / 2)
        let stars = ''

        for (let i = 0; i < five_vote; i++) {
            stars += '<img src="src/assets/img/star-svgrepo-com.png" alt="">';            
        }
        
        return stars;
    },
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
    },
    fetchTvShow(url) {        
        axios
        .get(url)
        .then(response => {
            this.tvShows = response.data.results;
        })
        .catch(err => {
            console.log(err);
            console.error(err.message);
        })
    }
    
})