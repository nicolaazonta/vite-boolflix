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
    <div class="searchBox">
        <div class="container">
            <input @keyup="movieSearch(), tvShowSearch(), store.averageStars()" v-model="store.searchingText" type="search" name="" id=""
                placeholder="type a movie title...." class="bg-dark text-light">
        </div>
    </div>
</template>

<style lang="scss" scoped></style>