import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  mutations: {},
  actions: {},
  modules: {},
};

export default new Vuex.Store<RootState>(store);
