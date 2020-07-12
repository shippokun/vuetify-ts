<template>
  <v-app-bar app color="indigo" dark>
    <v-app-bar-nav-icon @click.stop="emitToggle()"></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavigationHeaderComponent extends Vue {
  @Prop()
  public drawer!: boolean;

  @Prop()
  public toggleDraw!: Function;

  public emitToggle = () => {
    this.toggleDraw(!this.drawer);
  };
}
</script>
