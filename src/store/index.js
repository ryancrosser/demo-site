import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pageData: {},
    tools: [],
    loggedIn: false
  },
  getters: {
    tools(state) {
      return state.tools;
    },
    categories(state) {
      return state.pageData.categories;
    },
    flagshipTools(state) {
      return state.tools.filter(tool => tool.isFlagship);
    },
    isLoggedIn(state) {
      return state.loggedIn;
    }
  },
  actions: {
    async getToolData({ commit }) {
      const response = await axios.get('./assets/tools-metadata.json');

      commit('setPageData', response.data.pageData);
      commit('setToolData', response.data.tools);
    },
    login({ commit }) {
      commit('login');
    },
    logout({ commit }) {
      commit('logout');
    }
  },
  mutations: {
    setPageData(state, data) {
      state.pageData = data;
    },
    setToolData(state, data) {
      state.tools = data;
    },
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
    }
  },
  modules: {}
});
