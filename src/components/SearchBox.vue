<script>
import {store} from '../store'
    export default {
        name: 'SearchBox',
        data(){
            return{
                store
            }
        },
        methods:{
            movieSearch(){
                console.log(this.store.searchingText);
                const url = this.store.api_url_base + this.store.api_url_key + `&query=${this.store.searchingText}`;
                this.store.fetchMovie(url);
            }
        }
        
    }
</script>

<template>
    <div class="searchBox">
        <div class="container">
            <input @keyup="movieSearch()" v-model="store.searchingText" type="search" name="" id="" placeholder="type a movie title....">
            <button @click="movieSearch()" class="btn">search</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>