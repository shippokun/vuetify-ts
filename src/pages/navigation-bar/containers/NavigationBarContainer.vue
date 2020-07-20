<template>
  <NavigationBarComponent :draw="drawer" :toggleDraw="emitToggle" />
</template>
<script lang="ts">
import { NavigationBarComponent } from '../components';
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { DrawState } from '../../../store/types';

const module = namespace('draw');

@Component({
  components: {
    NavigationBarComponent,
  },
})
export default class NavigationBarContainer extends Vue {
  @module.Action('changeDraw') changeDraw!: (value: DrawState) => void;

  public emitToggle = (value: DrawState) => {
    this.changeDraw(value);
  };
}
</script>
