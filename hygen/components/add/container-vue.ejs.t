---
to: src/pages/<%= name %>/containers/<%= h.inflection.classify(name.replace(/-/g, "_")) %>Container.vue
unless_exists: true
---
<script lang="ts">
import { <%= h.inflection.classify(name.replace(/-/g, "_")) %>Component } from '../components';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    <%= h.inflection.classify(name.replace(/-/g, "_")) %>Component,
  },
})
export default class <%= h.inflection.classify(name.replace(/-/g, "_")) %>Container extends Vue {}
</script>
