<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list dense>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-email</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component
export default class NavigationBarComponent extends Vue {
  @Prop()
  public draw!: boolean;

  public get drawer(): boolean {
    return this.draw;
  }

  public set drawer(value: boolean) {
    this.emit(value);
  }

  @Emit()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public emit(value: boolean) {}
}
</script>
