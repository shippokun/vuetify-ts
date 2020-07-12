import Vuetify from 'vuetify';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import NavigationHeaderComponent from './NavigationHeaderComponent.vue';

const localVue = createLocalVue();

describe('NavigationHeaderComponent.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  const wrapper = shallowMount(NavigationHeaderComponent, {
    localVue,
    propsData: {
      drawer: false,
    },
  });
  it('snapshots', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
