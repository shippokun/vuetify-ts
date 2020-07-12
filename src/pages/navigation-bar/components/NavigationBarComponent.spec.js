import Vuetify from 'vuetify';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import NavigationBarComponent from './NavigationBarComponent.vue';

const localVue = createLocalVue();

describe('NavigationBarComponent.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify({
      breakpoint: {},
    });
  });
  const wrapper = shallowMount(NavigationBarComponent, {
    localVue,
    vuetify,
    propsData: {
      draw: false,
    },
  });
  it('snapshots', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
