import { MutationTree } from 'vuex';
import { DrawState } from '../types';

const mutations: MutationTree<DrawState> = {
  changeDraw: (state, drawer: boolean) => {
    state.drawer = drawer;
  },
};

export default mutations;
