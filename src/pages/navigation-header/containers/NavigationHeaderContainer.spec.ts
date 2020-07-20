import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import NavigationHeaderContainer from './NavigationHeaderContainer.vue';
import { DrawState } from '../../../store/types';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('NavigationHeaderContainer.vue', () => {
  let store: any;
  let state: DrawState;
  let actions: any;

  beforeEach(() => {
    state = {
      drawer: false,
    };
    actions = {
      changeDraw: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        draw: {
          namespaced: true,
          state,
          actions,
        },
      },
    });
  });

  describe('methods', () => {
    it('emitToggle', () => {
      const wrapper = shallowMount(NavigationHeaderContainer, {
        localVue,
        store,
      });
      const mockInput = true;
      // @ts-ignore
      wrapper.vm.emitToggle(mockInput);

      expect(actions.changeDraw).toHaveBeenCalled();
    });
  });
});
