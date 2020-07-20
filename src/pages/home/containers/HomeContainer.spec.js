import { shallowMount } from '@vue/test-utils';
import HomeContainer from './HomeContainer.vue';

describe('HomeContainer.vue', () => {
  it('impoer modules', () => {
    const wrapper = shallowMount(HomeContainer);

    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
