<script>
import { store } from '../store'
    export default {
        name: 'SiteMain',
        data(){
            return{
                store
            }
        }        
    }
</script>

<template>
    <main>
        <div class="container" v:for="movie in store.movies">

            <h1>{{movie.title}}</h1>
            <h2>{{movie.original_title}}</h2>
            <h2>{{movies.original_language}}</h2>
            <h3>{{movies.vote_average}}</h3>


        </div>
    </main>
</template>


<style lang="scss">

</style>