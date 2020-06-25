import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import HelloWorld from './HelloWorld.vue';

Vue.use(Vuetify);

const localVue = createLocalVue();

describe('HelloWorld.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      localVue,
      vuetify,
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
