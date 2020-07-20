import { shallowMount } from '@vue/test-utils';
import NavigationBarContainer from './NavigationBarContainer.vue';

describe('NavigationBarContainer.vue', () => {
  describe('methods', () => {
    it('emitToggle', () => {
      const wrapper = shallowMount(NavigationBarContainer, {
        propsData: {
          drawer: false,
          toggleDraw: jest.fn(),
        },
      });
      const mockInput = true;

      wrapper.vm.emitToggle(mockInput);
      expect(wrapper.vm.toggleDraw).toBeCalledWith(mockInput);
    });
  });
});
