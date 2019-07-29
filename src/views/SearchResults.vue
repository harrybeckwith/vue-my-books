<template>
<div>
    <Search/>    
    <div v-if="!loading">
        <Results/>
    </div>
</div>
</template>

<script>
import Results from '../components/Results.vue';
import Search from '../components/Search.vue';
import { mapGetters } from 'vuex';
export default {
    name: 'SearchResults',
    components: {
        Results,
        Search,
    },
    computed: {
        ...mapGetters(['loading']),
    },
};
</script>

<style>
</style>
