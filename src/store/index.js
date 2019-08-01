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
    wantToRead: [],
    readAlready: [],
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
    wantToRead: state => {
      return state.wantToRead;
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
    ADD_BOOK(state, payload) {
      // add book
      state[payload.dataName].push(payload.bookInfo);
      // remove duplicates
      const filteredArr = state[payload.dataName].reduce((acc, current) => {
        const x = acc.find(item => item.title === current.title);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
      // update state with no dups
      state[payload.dataName] = filteredArr;
    },
    DELETE_WANT(state, want) {
      state.wantToRead.splice(want, 1);
    },
    RESET_SEARCH_RESULTS(state) {
      state.searchResults = null;
    },
  },
  actions: {
    createEvent({ commit }, event) {
      commit('ADD_EVENT', event);
    },
    removeWant({ commit }, event) {
      commit('DELETE_WANT', event);
    },
    addSearchResults({ commit }, results) {
      commit('ADD_RESULTS', results);
    },
    addBook: ({ commit }, payload) => {
      commit('ADD_BOOK', payload);
    },
    resetSearchResults({ commit }) {
      commit('RESET_SEARCH_RESULTS');
    },
  },
});
