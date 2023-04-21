<script>
import { store } from '../store'
export default {
    name: 'SiteMain',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <main>
        <div class="container w-75">
            <div class="row">
                <div class="col-md-4 col-sm-6 py-3" v-for="movie in store.movies">
                    <div id="movie" class="card bg-dark text-light h-100 p-2 pos-relative"><!-- movie -->
                        <img class="card-img h-100" :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="poster of movie">
                        <div class="card-img-overlay d-flex flex-column justify-content-end">
                            <div  v-html="store.averageStars(movie.vote_average)" class="card-text stars"></div>
                            <h4 class="card-text">{{ movie.title }}</h4>
                            <h6 class="card-text">{{ movie.original_title }}</h6>
                            <h6 class="text-uppercase">movie</h6>
                            <p class="card-text d-sm-none d-md-block">{{ movie.overview.slice(0, 200) }}...</p>
                            <img class="lang_flag" :src="`/src/assets/img/${movie.original_language}.png`"
                            :alt="movie.original_language">
                        </div>
                    </div>
                </div>

                <div class="col-4 py-3" v-for="tvShow in store.tvShows">
                    <div id="tvshow" class="card bg-dark text-light h-100 p-2 pos-relative">
                        <img class="card-img h-100" :src="`https://image.tmdb.org/t/p/w342/${tvShow.poster_path}`" alt="poster of tv show">
                        <div class="card-img-overlay d-flex flex-column justify-content-end">
                            <div  v-html="store.averageStars(tvShow.vote_average)" class="card-text stars"></div>
                            <h4 class="card-text">{{ tvShow.name }}</h4>
                            <h6 class="card-text">{{ tvShow.original_name }}</h6>
                            <h6 class="text-uppercase">tv show</h6>
                            <p class="card-text d-sm-none d-md-block">{{ tvShow.overview.slice(0, 200) }}...</p>
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

    & .stars{
        display: flex;
        flex-wrap: nowrap;
        position: absolute;
        left: 50%;
        top: 1rem;
        transform: translate(-50% , 0);
    }
    & .stars img{
        width: 2rem;
    }

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
        align-self: center;
    }
}
</style>