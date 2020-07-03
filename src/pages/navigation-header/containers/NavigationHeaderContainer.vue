<template>
  <NavigationHeaderComponent :drawer="drawer" @emit="emitToggle" />
</template>
<script lang="ts">
import { NavigationHeaderComponent } from '../components';
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component({
  components: {
    NavigationHeaderComponent,
  },
})
export default class NavigationHeaderContainer extends Vue {
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
