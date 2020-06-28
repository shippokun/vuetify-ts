---
to: src/pages/<%= name %>/containers/index.ts
unless_exists: true
---
export { default as <%= h.inflection.classify(name.replace(/-/g, "_")) %>Container } from './<%= h.inflection.classify(name.replace(/-/g, "_")) %>Container.vue';
