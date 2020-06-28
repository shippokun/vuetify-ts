import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  mutations: {},
  actions: {},
  modules: {},
};

export default new Vuex.Store<RootState>(store);
