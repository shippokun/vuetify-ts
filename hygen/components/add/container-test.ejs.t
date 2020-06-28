---
to: src/pages/<%= name %>/containers/<%= h.inflection.classify(name.replace(/-/g, "_")) %>Container.spec.js
unless_exists: true
---
import { shallowMount } from '@vue/test-utils';
import <%= h.inflection.classify(name.replace(/-/g, "_")) %>Container from './<%= h.inflection.classify(name.replace(/-/g, "_")) %>Container.vue';

describe('<%= h.inflection.classify(name.replace(/-/g, "_")) %>Container.vue', () => {
  const wrapper = shallowMount(<%= h.inflection.classify(name.replace(/-/g, "_")) %>Container);
});
