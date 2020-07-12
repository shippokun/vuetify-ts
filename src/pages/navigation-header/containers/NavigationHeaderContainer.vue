<template>
  <NavigationHeaderComponent :drawer="drawer" :toggleDraw="emitToggle" />
</template>
<script lang="ts">
import { NavigationHeaderComponent } from '../components';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    NavigationHeaderComponent,
  },
})
export default class NavigationHeaderContainer extends Vue {
  @Prop()
  public drawer!: boolean;

  @Prop()
  public toggleDraw!: Function;

  public emitToggle = (value: boolean) => {
    this.toggleDraw(value);
  };
}
</script>
