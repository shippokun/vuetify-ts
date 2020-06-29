import { shallowMount, createLocalVue } from '@vue/test-utils';
import FooterComponent from './FooterComponent.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);
const localVue = createLocalVue();

describe('FooterComponent.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('render', () => {
    const wrapper = shallowMount(FooterComponent, {
      localVue,
      vuetify,
    });
    expect(wrapper.text()).toEqual('© 2020');
  });
});
