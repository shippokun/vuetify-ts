import { shallowMount } from '@vue/test-utils';
import HomeComponent from './HomeComponent.vue';

describe('HomeComponent.vue', () => {
  const wrapper = shallowMount(HomeComponent, {
    propsData: {
      source: '',
    },
  });
  it('render', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
