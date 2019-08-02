<template>
     <div class="container">
        <div 
        v-for="(item, i ) in results.items" 
        :key="i" class="book"
        :class="{ readActive: i === activeItem}"
        >
            <p v-for="a in item.volumeInfo.authors" :key="a"> Author: {{a}} </p>
            <img :src ="item.volumeInfo.imageLinks.smallThumbnail"/>
            <p> title: {{ item.volumeInfo.title }} </p>
            <p v-if="item.volumeInfo.averageRating"> Rating:  {{ item.volumeInfo.averageRating }} </p>
            <p> Description: {{ item.volumeInfo.description }} </p>
        
            <button class ="book__btn book__want" @click="wantToRead(i)"> want to read</button>
            <button @click="readAlready(i)"> read already </button>
        </div>
    </div>
</template>

<script>
import copyBookInfo from '../helpers/copyBookInfo';
export default {
    name: 'Results',
    data() {
        return {
            activeItem: null,
        };
    },
    computed: {
        results() {
            return this.$store.getters.searchResults;
        },
    },
    methods: {
        wantToRead(i) {
            copyBookInfo(i, 'wantToRead');
        },
        readAlready(i) {
            copyBookInfo(i, 'readAlready');
            this.activeItem = i;
        },
    },
    destroyed() {
        // reset search to null
        this.$store.dispatch('resetSearchResults');
    },
};
</script>
<style lang="scss">
.readActive {
    .book {
        &__want {
            display: none;
        }
    }
}
</style>