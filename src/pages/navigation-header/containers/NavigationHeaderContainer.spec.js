import { shallowMount } from '@vue/test-utils';
import NavigationHeaderContainer from './NavigationHeaderContainer.vue';

describe('NavigationHeaderContainer.vue', () => {
  describe('methods', () => {
    it('emitToggle', () => {
      const wrapper = shallowMount(NavigationHeaderContainer, {
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
