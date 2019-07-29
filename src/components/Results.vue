/* eslint-disable no-console */
<template>
     <div class="container">
        <div v-for="(item, i ) in results.items" :key="i" class="book">
                <p v-for="a in item.volumeInfo.authors" :key="a"> Author: {{a}} </p>
            <img :src ="item.volumeInfo.imageLinks.smallThumbnail"/>
            <p> title: {{ item.volumeInfo.title }} </p>
            <p v-if="item.volumeInfo.averageRating"> Rating:  {{ item.volumeInfo.averageRating }} </p>
            <p> Description: {{ item.volumeInfo.description }} </p>
        
            <button @click="wantToRead(i)"> want to read</button>
            <button> read already </button>
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
    methods: {
        wantToRead(i) {
            console.log(i);

            const selected = this.$store.getters.searchResults.items[i]
                .volumeInfo;
            const title = selected.title;
            const image = selected.imageLinks['smallThumbnail'];
            const authors = selected.authors;

            const wantToRead = {
                title,
                image,
                authors,
            };
            //send back to store
            // add to want to read view
            console.log(wantToRead);
            this.$store.dispatch('addWantToRead', wantToRead);
        },
    },
};
</script>

<style>
</style>
