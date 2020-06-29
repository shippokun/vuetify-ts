<template>
  <v-app>
    <HomeComponent />
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
export default class HomeContainer extends Vue {}
</script>
