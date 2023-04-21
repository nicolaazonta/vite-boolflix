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
                <div class="col-3 py-3" v-for="movie in store.movies">
                    <div id="movie" class="card bg-dark text-light h-100 p-2"><!-- movie -->
                        <img class="card-img h-100" :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="">
                        <div class="card-img-overlay d-flex flex-column justify-content-end">
                            <h4 class="card-text">{{ movie.title }}</h4>
                            <h6 class="card-text">{{ movie.original_title }}</h6>
                            <h6 class="card-text">{{ movie.original_language }}</h6>
                            <h6 class="card-text">{{store.averageStars(movie.vote_average)}}</h6>
                            <!-- <img src="../assets/img/star-svgrepo-com.png" alt=""> -->
                            <!-- <h5 class="card-text">{{ movie.vote_average }}</h5> -->
                            <!-- <span class="px-1">movie</span> -->
                            <img class="lang_flag" :src="`/src/assets/img/${movie.original_language}.png`"
                                :alt="movie.original_language">
                        </div>
                    </div>
                </div>
                <!-- <div class="col-3 py-3" v-for="tvShow in store.tvShows">
                    <div id="tvshow" class="card bg-dark text-light h-100 p-2">
                        <img class="card-img h-100" :src="`https://image.tmdb.org/t/p/w342/${tvShow.poster_path}`" alt="">
                        <div class="card-img-overlay d-flex flex-column justify-content-end">
                            <h5 class="card-text">{{ tvShow.name }}</h5>
                            <p class="card-text">{{ tvShow.original_name }}</p>
                            <p class="card-text">{{ tvShow.original_language }}</p>
                            <p class="card-text">{{store.averageStars(tvShow.vote_average)}}</p>
                            <span class="px-1">tv show</span>
                            <img class="lang_flag" :src="`/src/assets/img/${tvShow.original_language}.png`"
                                :alt="tvShow.original_language">
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </main>
</template>


<style lang="scss">
main {

    & .card-img-overlay {
        display: none!important;
    }
    & .card:hover .card-img-overlay {
        display: inherit!important;
    }
    & .card-img{
        opacity:1;
        transition: opacity .5s;
    }
    & .card:hover .card-img {
        opacity:0.2;
    }
    & .lang_flag {
        aspect-ratio: 1;
        width: 2rem;
    }
}
</style>