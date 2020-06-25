<template>
  <v-row class="text-center">
    <v-col cols="12">
      <v-img
        :src="require('@/assets/logo.svg')"
        class="my-3"
        contain
        height="200"
      />
      <h1>{{ msg }}</h1>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>
