<template>
  <NavigationBarComponent :drawer="drawer" @emit="emitToggle" />
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

  public emitToggle(): void {
    this.emit(!this.drawer);
  }
}
</script>
