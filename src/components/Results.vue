<template>
     <div class="results">
        <div class="results__book">
                results book
        </div>
        <div v-for="(item, i ) in results.items" :key="i">
      
           {{ item.volumeInfo.title}}
           <img :src ="item.volumeInfo.imageLinks.smallThumbnail"/>
        </div>
     
    </div>
</template>

<script>
export default {
    name: 'Results',
    computed: {
        results() {
            return this.$store.getters.searchResults;
        },
    },
};
</script>

<style>
</style>
