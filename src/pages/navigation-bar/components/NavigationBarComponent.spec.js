import { shallowMount } from '@vue/test-utils';
import NavigationBarComponent from './NavigationBarComponent.vue';
import Vuetify from 'vuetify';

describe('NavigationBarComponent.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify({
      mocks: {
        breakpoint: {
          mobileBreakpoint: 0,
        },
      },
    });
  });
  it('snapshots', () => {
    const wrapper = shallowMount(NavigationBarComponent, {
      vuetify,
      propsData: {
        draw: false,
        toggleDraw: jest.fn(),
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  describe('computed', () => {
    it('set drawer', () => {
      const wrapper = shallowMount(NavigationBarComponent, {
        vuetify,
        propsData: {
          draw: false,
          toggleDraw: jest.fn(),
        },
      });
      const mockInput = false;
      wrapper.vm.drawer = mockInput;

      expect(wrapper.vm.toggleDraw).toBeCalledWith(mockInput);
    });
  });
  describe('methods', () => {
    it('emitToggle', () => {
      const wrapper = shallowMount(NavigationBarComponent, {
        vuetify,
        propsData: {
          draw: false,
          toggleDraw: jest.fn(),
        },
      });
      const mockInput = false;
      wrapper.vm.emitToggle(mockInput);

      expect(wrapper.vm.toggleDraw).toBeCalledWith(mockInput);
    });
  });
});
