import { shallowMount } from '@vue/test-utils';
import NavigationHeaderComponent from './NavigationHeaderComponent.vue';

describe('NavigationHeaderComponent.vue', () => {
  const wrapper = shallowMount(NavigationHeaderComponent, {
    propsData: {
      drawer: false,
      toggleDraw: jest.fn(),
    },
  });
  it('snapshots', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  describe('methods', () => {
    it('emitToggle', () => {
      const mockInput = false;
      wrapper.vm.emitToggle(mockInput);

      expect(wrapper.vm.toggleDraw).toBeCalledWith(!mockInput);
    });
  });
});
