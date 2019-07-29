<template>
<div class="search">
<form @submit="searchBooks">
    <input v-model="search" type="text" placeholder="search for books">
    <button type="submit">Search for books</button>
    </form>
   
</div>

</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            search: '',
        };
    },
    methods: {
        searchBooks() {
            axios
                .get(
                    `https://www.googleapis.com/books/v1/volumes?q=${
                        this.search
                    }`
                )
                .then(response => {
                    // JSON responses are automatically parsed.

                    this.$store.dispatch('addSearchResults', response.data);
                })
                .catch(e => {
                    this.errors.push(e);
                });
        },
    },
};
</script>

<style>
</style>
