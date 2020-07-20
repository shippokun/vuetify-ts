import { shallowMount } from '@vue/test-utils';
import HomeContainer from './HomeContainer.vue';

describe('HomeContainer.vue', () => {
  describe('methods', () => {
    it('toggelDraw', () => {
      const wrapper = shallowMount(HomeContainer);
      const input = true;

      expect(wrapper.vm.drawer).toBe(false);
      wrapper.vm.toggleDraw(input);

      expect(wrapper.vm.drawer).toBe(true);
    });
  });
});
