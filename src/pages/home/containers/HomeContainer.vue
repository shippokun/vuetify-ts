<template>
  <v-app>
    <NavigationHeaderPage />
    <NavigationBarPage :drawer="drawer" :toggleDraw="toggleDraw" />
    <HomeComponent />
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { HomeComponent } from '../components';
import { FooterPage } from '../../footer';
import { NavigationHeaderPage } from '../../navigation-header';
import { NavigationBarPage } from '../../navigation-bar';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    HomeComponent,
    FooterPage,
    NavigationHeaderPage,
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
