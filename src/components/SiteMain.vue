<script>
import { store } from '../store'
export default {
    name: 'SiteMain',
    data() {
        return {
            store
        }
    },
    methods: {

    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-4 py-3" v-for="movie in store.movies">
                    <div id="movie" class="card bg-dark text-light h-100 p-2"><!-- movie -->
                        <img class="card-img h-100" :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="">
                        <div class="card-img-overlay d-flex flex-column justify-content-end">
                            <h3 class="card-text">{{ movie.title }}</h3>
                            <h5 class="card-text">original title: {{ movie.original_title }}</h5>
                            <h5 class="card-text">original language: {{ movie.original_language }}</h5>
                            <h5 class="card-text">average vote: {{ movie.vote_average }}</h5>
                            <span class="px-1">movie</span>
                            <img class="lang_flag" :src="`/src/assets/img/${movie.original_language}.png`"
                                :alt="movie.original_language">
                        </div>
                    </div>
                </div>
                <div class="col-4 py-3" v-for="tvShow in store.tvShows">
                    <div id="tvshow" class="card bg-dark text-light h-100 p-2"><!-- movie -->
                        <img class="card-img h-100" :src="`https://image.tmdb.org/t/p/w342/${tvShow.poster_path}`" alt="">
                        <div class="card-img-overlay d-flex flex-column justify-content-end">
                            <h3 class="card-text">{{ tvShow.name }}</h3>
                            <h5 class="card-text">original title: {{ tvShow.original_name }}</h5>
                            <h5 class="card-text">original language: {{ tvShow.original_language }}</h5>
                            <h5 class="card-text">average vote: {{ tvShow.vote_average }}</h5>
                            <span class="px-1">tv show</span>
                            <img class="lang_flag" :src="`/src/assets/img/${tvShow.original_language}.png`"
                                :alt="tvShow.original_language">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>


<style lang="scss">
main {
    /* & .poster_image{
        object-fit: fill;
    } */



    & .card-img-overlay {
        display: none!important;
    }

    & .card:hover .card-img-overlay {
        display: inherit!important;
    }

    & .card:hover .card-img {
        filter: opacity(20%);
    }

    & .lang_flag {
        aspect-ratio: 1;
        width: 2rem;
    }
}
</style>