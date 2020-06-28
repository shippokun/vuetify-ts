---
to: src/pages/<%= name %>/components/index.ts
unless_exists: true
---
export { default as <%= h.inflection.classify(name.replace(/-/g, "_")) %>Component } from './<%= h.inflection.classify(name.replace(/-/g, "_")) %>Component.vue';
