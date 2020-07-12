import { ActionTree } from 'vuex';
import { DrawState, RootState } from '../types';

const actions: ActionTree<DrawState, RootState> = {
  changeDraw: ({ commit }, drawer: DrawState) => {
    commit('changeDraw', drawer);
  },
};

export default actions;
