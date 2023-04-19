<script>
import { store } from '../store'
export default {
    name: 'SiteMain',
    data() {
        return {
            store
        }
    },
    methods:{
       
    }
}
</script>

<template>
    <main>
        <div class="container" >
            <div class="row">
                <div class="col-4 py-3" v-for="movie in store.movies">
                    <div class="card bg-dark text-light h-100 g-4">
                        <h3>title: {{ movie.title }}</h3>
                        <h3>original title: {{ movie.original_title }}</h3>
                        <h5>original language: {{ movie.original_language }}</h5>
                        <h5>average vote: {{ movie.vote_average }}</h5>
                        <img class="w-25" :src="`/src/assets/img/${movie.original_language}.png`" alt="">
                        <!-- <img src="../assets/img/fr.png" alt=""> -->
                    </div>
                </div>
            </div>




        </div>
    </main>
</template>


<style lang="scss"></style>