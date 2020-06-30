<template>
  <v-app>
    <NavigationBarPage :drawer="drawer" @emit="toggleDraw" />
    <HomeComponent :draw="drawer" @emit="toggleDraw" />
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { HomeComponent } from '../components';
import { FooterPage } from '../../footer';
import { NavigationBarPage } from '../../navigation-bar';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    HomeComponent,
    FooterPage,
    NavigationBarPage,
  },
})
export default class HomeContainer extends Vue {
  public drawer = false;

  public toggleDraw(value: boolean): void {
    this.drawer = value;
  }
}
</script>
