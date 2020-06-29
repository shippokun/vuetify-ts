<template>
  <v-app>
    <HomeComponent :draw="drawer" @emit="toggleDraw" />
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { HomeComponent } from '../components';
import { FooterPage } from '../../footer';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    HomeComponent,
    FooterPage,
  },
})
export default class HomeContainer extends Vue {
  public drawer = false;

  public toggleDraw(value: boolian): void {
    this.drawer = value;
  }
}
</script>
