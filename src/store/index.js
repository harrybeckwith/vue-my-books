/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    categories: ['travel', 'fun', 'social', 'work', 'other'],
    events: [],
    books: [],
    searchResults: null,
    loading: false,
  },
  getters: {
    cat: state => {
      return state.categories;
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    },
    events: state => {
      return state.events;
    },
    loading: state => {
      return state.searchResults !== null
        ? (state.loading = false)
        : (state.loading = true);
    },
    searchResults: state => {
      return state.searchResults;
    },
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    DELETE_EVENT(state, event) {
      state.events.splice(event, 1);
    },
    ADD_RESULTS(state, results) {
      state.searchResults = results;
    },
  },
  actions: {
    createEvent({ commit }, event) {
      commit('ADD_EVENT', event);
    },
    removeEvent({ commit }, event) {
      commit('DELETE_EVENT', event);
    },
    addSearchResults({ commit }, results) {
      commit('ADD_RESULTS', results);
    },
  },
});
