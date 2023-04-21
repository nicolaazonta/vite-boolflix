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
            //console.log(this.store.searchingText);
            const url = this.store.api_url_base_movie + this.store.api_url_key + `&query=${this.store.searchingText}`;
            this.store.fetchMovie(url);
        },
        tvShowSearch() {
            //console.log(this.store.searchingText);
            const url = this.store.api_url_base_tvShow + this.store.api_url_key + `&query=${this.store.searchingText}`;
            this.store.fetchTvShow(url);
        }
    }

}
</script>

<template>
    <div class="searchBox py-4">
        <div class="container w-75 d-flex justify-content-between">
            <div class="input-group input-group-lg w-25">
                <input placeholder="type a movie title...." type="text" class="form-control bg-dark text-light" aria-describedby="inputGroup-sizing-lg" @keyup="movieSearch(), tvShowSearch(), store.averageStars()" v-model="store.searchingText">
            </div>
            <h1 class="text-uppercase">boolflix</h1>
        </div>
    </div>
</template>

<style lang="scss">
*{
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h1{
    color: #18ecde;
}
</style>