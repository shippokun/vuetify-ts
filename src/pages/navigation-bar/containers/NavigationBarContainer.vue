<template>
  <NavigationBarComponent :draw="drawer" :toggleDraw="emitToggle" />
</template>
<script lang="ts">
import { NavigationBarComponent } from '../components';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    NavigationBarComponent,
  },
})
export default class NavigationBarContainer extends Vue {
  @Prop()
  public drawer!: boolean;

  @Prop()
  public toggleDraw!: Function;

  public emitToggle = (value: boolean) => {
    this.toggleDraw(value);
  };
}
</script>
