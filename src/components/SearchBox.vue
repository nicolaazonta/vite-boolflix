<script>
import { store } from '../store'
export default {
    name: 'SearchBox',
    data() {
        return {
            store
        }
    },
    methods: {
        movieSearch() {
            console.log(this.store.searchingText);
            const url = this.store.api_url_base + this.store.api_url_key + `&query=${this.store.searchingText}`;
            this.store.fetchMovie(url);
        },
        flagAwesome() {
            let lang;
            store.movies.forEach(movie => {                
                if (movie.original_language === 'en') {
                    lang = 'united-kingdom';
                }
                console.log('lingua ' + lang);
            });
        }
    }

}
</script>

<template>
    <div class="searchBox">
        <div class="container">
            <input @keyup="movieSearch(), flagAwesome()" v-model="store.searchingText" type="search" name="" id=""
                placeholder="type a movie title...." class="bg-dark text-light">
            <button @click="movieSearch()" class="btn bg-dark text-light">search</button>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>