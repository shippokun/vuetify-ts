<template>
  <v-app>
    <NavigationHeaderPage />
    <NavigationBarPage />
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
export default class HomeContainer extends Vue {}
</script>
