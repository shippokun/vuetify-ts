import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { draw } from './Draw';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    draw,
  },
};

export default new Vuex.Store<RootState>(store);
