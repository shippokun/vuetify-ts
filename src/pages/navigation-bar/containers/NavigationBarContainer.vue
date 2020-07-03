<template>
  <NavigationBarComponent :draw="drawer" @emit="emitToggle" />
</template>
<script lang="ts">
import { NavigationBarComponent } from '../components';
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component({
  components: {
    NavigationBarComponent,
  },
})
export default class NavigationBarContainer extends Vue {
  @Prop()
  public drawer!: boolean;

  @Emit()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public emit(value: boolean) {}

  public emitToggle(value: boolean): void {
    this.emit(value);
  }
}
</script>
