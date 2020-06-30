<template>
  <v-app-bar app color="indigo" dark>
    <v-app-bar-nav-icon @click.stop="emitToggle()"></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component
export default class NavigationBarComponent extends Vue {
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
