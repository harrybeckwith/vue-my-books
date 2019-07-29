<template>
  <div>
    <Search/>
    <div v-if="!loading">
        <Results/>
      </div>
  </div>
</template>

<script>
import Search from './components/Search.vue';
import Results from './components/Results.vue';
import { mapGetters } from 'vuex';
export default {
    name: 'app',
    components: {
        Search,
        Results,
    },
    computed: {
        ...mapGetters(['events', 'loading']),
    },
};
</script>

<style>
</style>
