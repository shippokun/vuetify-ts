import { shallowMount, createLocalVue } from '@vue/test-utils';
import NavigationBarComponent from './NavigationBarComponent.vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import { DrawState } from '../../../store/types';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('NavigationBarComponent.vue', () => {
  let vuetify: any;
  let store: any;
  let state: DrawState;

  beforeEach(() => {
    vuetify = new Vuetify({
      mocks: {
        breakpoint: {
          mobileBreakpoint: 0,
        },
      },
    });
    store = new Vuex.Store({
      modules: {
        draw: {
          namespaced: true,
          state: {
            drawer: false,
          },
        },
      },
    });
  });
  it('snapshots', () => {
    const wrapper = shallowMount(NavigationBarComponent, {
      vuetify,
      store,
      localVue,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  describe('computed', () => {
    it('set drawer', () => {
      const wrapper = shallowMount(NavigationBarComponent, {
        vuetify,
        localVue,
        store,
        propsData: {
          toggleDraw: jest.fn(),
        },
      });
      const mockInput = true;
      // @ts-ignore
      wrapper.vm.drawer = mockInput;

      // @ts-ignore
      expect(wrapper.vm.toggleDraw).toBeCalledWith(mockInput);
    });
  });
  describe('methods', () => {
    it('emitToggle', () => {
      const wrapper = shallowMount(NavigationBarComponent, {
        vuetify,
        localVue,
        store,
        propsData: {
          toggleDraw: jest.fn(),
        },
      });
      const mockInput = false;
      // @ts-ignore
      wrapper.vm.emitToggle(mockInput);

      // @ts-ignore
      expect(wrapper.vm.toggleDraw).toBeCalledWith(mockInput);
    });
  });
});
