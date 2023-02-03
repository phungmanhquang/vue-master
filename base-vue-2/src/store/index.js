import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showProcess: false,
  },
  getters: {},
  mutations: {
    SET_SHOW_PROGRESS(state, val) {
      state.showProcess = val;
    },
  },
  actions: {
    setShowProgress({ commit }, val) {
      commit("SET_SHOW_PROGRESS", val);
    },
  },
  modules: {
    user,
  },
});
