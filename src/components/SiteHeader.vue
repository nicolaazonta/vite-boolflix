<script>
import { store } from '../store'
import SearchBox from './SearchBox.vue'
    export default {
        name: 'SiteHeader',
        components: {SearchBox},
        data(){
            return{
                store
            }
        }        
    }
</script>

<template>
    <SearchBox/>
</template>


<style lang="scss">

</style>