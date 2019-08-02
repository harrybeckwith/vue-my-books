<template>
  <div>
    <router-link tag="li" to="/want-to-read" v-if="wantToRead.length > 0">
      <a>want to read</a> {{ wantToRead.length }}
    </router-link>
     <router-link tag="li" to="/sign-up">
      <a>sign up</a> 
    </router-link>
    <router-link tag="li" to="/read-already" v-if="readAlready.length > 0">
      <a>read already</a> {{ readAlready.length }}
    </router-link>
      <router-link tag="li" to="/">
      <a>search</a>
    </router-link>
      <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'app',
    computed: {
        ...mapGetters(['wantToRead', 'readAlready']),
    },
};
</script>

<style>
.container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.book {
    width: 20%;
}
</style>
