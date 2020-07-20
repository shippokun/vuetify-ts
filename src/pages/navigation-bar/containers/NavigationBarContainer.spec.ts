import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import NavigationBarContainer from './NavigationBarContainer.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('NavigationBarContainer.vue', () => {
  let store: any;
  let actions: any;

  beforeEach(() => {
    actions = {
      changeDraw: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        draw: {
          namespaced: true,
          actions,
        },
      },
    });
  });
  describe('methods', () => {
    it('emitToggle', () => {
      const wrapper = shallowMount(NavigationBarContainer, {
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
