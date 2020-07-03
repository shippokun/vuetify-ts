<template>
  <v-app>
    <NavigationHeaderPage :drawer="drawer" @emit="toggleDraw" />
    <HomeComponent :draw="drawer" @emit="toggleDraw" />
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { HomeComponent } from '../components';
import { FooterPage } from '../../footer';
import { NavigationHeaderPage } from '../../navigation-header';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    HomeComponent,
    FooterPage,
    NavigationHeaderPage,
  },
})
export default class HomeContainer extends Vue {
  public drawer = false;

  public toggleDraw(value: boolean): void {
    this.drawer = value;
  }
}
</script>
