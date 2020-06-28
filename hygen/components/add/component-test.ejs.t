---
to: src/pages/<%= name %>/components/<%= h.inflection.classify(name.replace(/-/g, "_")) %>Component.spec.js
unless_exists: true
---
import { shallowMount } from '@vue/test-utils';
import <%= h.inflection.classify(name.replace(/-/g, "_")) %>Component from './<%= h.inflection.classify(name.replace(/-/g, "_")) %>Component.vue';

describe('<%= h.inflection.classify(name.replace(/-/g, "_")) %>Component.vue', () => {
  const wrapper = shallowMount(<%= h.inflection.classify(name.replace(/-/g, "_")) %>Component);
});
