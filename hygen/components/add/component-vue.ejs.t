---
to: src/pages/<%= name %>/components/<%= h.inflection.classify(name.replace(/-/g, "_")) %>Component.vue
unless_exists: true
---
<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class <%= h.inflection.classify(name.replace(/-/g, "_")) %>Component extends Vue {}
</script>
