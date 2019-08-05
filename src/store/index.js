/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';
import firebase from '../firebase';
import * as fb from 'firebase';
var collections = firebase.database.ref('searchResults');
Vue.use(Vuex);
Vue.use(firebase);
export const store = new Vuex.Store({
  state: {
    books: [],
    searchResults: null,
    loading: false,
    wantToRead: [],
    readAlready: [],
    user: null,
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
    readAlready: state => {
      return state.readAlready;
    },
    user: state => {
      return state.user;
    },
  },
  mutations: {
    DELETE_EVENT(state, event) {
      state.events.splice(event, 1);
    },
    ADD_RESULTS(state, results) {
      state.searchResults = results;
      collections.set(results);
    },
    ADD_BOOK(state, payload) {
      const { dataName, bookInfo } = payload;
      // add book
      state[dataName].push(bookInfo);
      // remove duplicates
      const filteredArr = state[dataName].reduce((acc, current) => {
        const x = acc.find(item => item.title === current.title);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
      // update state with no dups
      state[dataName] = filteredArr;
    },
    DELETE_WANT(state, want) {
      state.wantToRead.splice(want, 1);
    },
    RESET_SEARCH_RESULTS(state) {
      state.searchResults = null;
    },
    SET_USER(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    removeWant({ commit }, event) {
      commit('DELETE_WANT', event);
    },
    addSearchResults({ commit }, results) {
      commit('ADD_RESULTS', results);

      collections.on('value', snapshot => {
        commit('ADD_RESULTS', snapshot.val());
      });
    },
    addBook: ({ commit }, payload) => {
      commit('ADD_BOOK', payload);
    },
    resetSearchResults({ commit }) {
      commit('RESET_SEARCH_RESULTS');
    },
    signUserUp({ commit }, payload) {
      fb.auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          const newUser = {
            id: user.user.uid,
          };
          commit('SET_USER', newUser);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
});
