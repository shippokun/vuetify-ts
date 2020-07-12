import { Module } from 'vuex';
import { DrawState, RootState } from '../types';
import actions from './actions';
import mutations from './mutations';

const state: DrawState = {
  drawer: false,
};

export const draw: Module<DrawState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
};
