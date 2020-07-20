<template>
  <NavigationHeaderComponent :drawer="drawer" :toggleDraw="emitToggle" />
</template>
<script lang="ts">
import { NavigationHeaderComponent } from '../components';
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { DrawState } from '../../../store/types';

const module = namespace('draw');

@Component({
  components: {
    NavigationHeaderComponent,
  },
})
export default class NavigationHeaderContainer extends Vue {
  @module.State(state => state.drawer) drawer!: DrawState;

  @module.Action('changeDraw') changeDraw!: (value: boolean) => void;

  public emitToggle = (value: boolean) => {
    this.changeDraw(value);
  };
}
</script>
