<script>
import { store } from './store'
import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter
  },
  data(){
    return{
      store
    }
  },
  mounted(){
    //store.fetchMovie(`${store.api_url_base}+${store.api_url_key}+${store.searchingText}`)
    store.fetchMovie(store.api_url_base_movie+store.api_url_key+store.searchingText);
    store.fetchTvShow(store.api_url_base_tvShow+store.api_url_key+store.searchingText);

  }
  
}

</script>

<template>
  <SiteHeader></SiteHeader>
  <SiteMain></SiteMain>
  <SiteFooter></SiteFooter>
</template>


<style lang="scss" scoped>

</style>
