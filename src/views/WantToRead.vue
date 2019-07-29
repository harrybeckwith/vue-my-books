<template>
    <div class="container">
         <div v-for="(item, i ) in wantToRead" :key="i" class="book">
            <p v-for="a in item.authors" :key="a"> Author: {{a}} </p>
            <img :src ="item.image.smallThumbnail"/>
            <p> title: {{ item.title }} </p>
            <p v-if="item.averageRating"> Rating:  {{ item.averageRating }} </p>
            <p> Description: {{ item.description }} </p>
            <button @click="deleteWant(i)"> Remove </button>
            <button> Add to read books </button>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        wantToRead() {
            return this.$store.getters.wantToRead;
        },
    },
    methods: {
        deleteWant(i) {
            this.$store.dispatch('removeWant', i);
        },
        // add to read books
        // click get index and copy of whole object
        // add this to read books data.
    },
};
</script>

<style>
</style>