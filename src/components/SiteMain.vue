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
                    <div id="movie" class="card card_special bg-dark text-light h-100 p-2"><!-- movie -->
                        <div class="card-body">
                            <h3>title: {{ movie.title }}</h3>
                            <h5>original title: {{ movie.original_title }}</h5>
                            <h5>original language: {{ movie.original_language }}</h5>
                            <h5>average vote: {{ movie.vote_average }}</h5>
                        </div>
                        <div class="card-footer d-flex justify-content-end align-items-end">
                            <span class="px-2">movie</span>
                            <img class="" :src="`/src/assets/img/${movie.original_language}.png`" :alt="movie.original_language">
                        </div>
                    </div>                    
                </div>
                <div class="col-4 py-3" v-for="tvShow in store.tvShows">
                    <div id="tvshow" class="card card_special bg-dark text-light h-100 p-2"><!-- movie -->
                        <div class="card-body">
                            <h3>title: {{ tvShow.name }}</h3>
                            <h5>original title: {{ tvShow.original_name }}</h5>
                            <h5>original language: {{ tvShow.original_language }}</h5>
                            <h5>average vote: {{ tvShow.vote_average }}</h5> 
                        </div>
                        <div class="card-footer d-flex justify-content-end align-items-end">
                            <span class="px-2">tv show</span>
                            <img class="" :src="`/src/assets/img/${tvShow.original_language}.png`" :alt="tvShow.original_language">
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </main>
</template>


<style lang="scss">
main {
    & .card-footer{
        border: none!important;
        background: none!important;
    }
    & .card-footer img {
       /*  justify-self: end;
        align-self: end; */
        aspect-ratio: 1;
        width: 3rem;
    }
}
</style>