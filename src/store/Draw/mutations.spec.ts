import MutationModule from './mutations';
import { DrawState } from '../types';

describe('mutation', () => {
  describe('changeDraw', () => {
    let state: DrawState;

    beforeEach(() => {
      state = {
        drawer: false,
      };
    });

    it('should be able to write drawer', () => {
      const inputDrawer = true;
      const wrapper = (mutations: any) =>
        mutations.changeDraw(state, inputDrawer);
      wrapper(MutationModule);

      expect(state.drawer).toBe(true);
    });
  });
});
