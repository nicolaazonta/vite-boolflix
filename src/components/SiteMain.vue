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
        <div class="container">

            <h1>{movies.original_title}</h1>
            <h2>{movies.original_language}</h2>
            <h3>{movies.vote_average}</h3>


        </div>
    </main>
</template>


<style lang="scss">

</style>