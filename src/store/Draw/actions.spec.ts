import ActionModule from './actions';
import { DrawState } from '../types';

describe('actions', () => {
  describe('changeDraw', () => {
    let state: DrawState;

    beforeEach(() => {
      state = {
        drawer: false,
      };
    });

    it('should be able to commit changeDraw with drawer', () => {
      const commit = jest.fn();

      const wrapper = (actions: any) => {
        return actions.changeDraw({ commit }, state.drawer);
      };
      wrapper(ActionModule);

      expect(commit).toHaveBeenCalledWith('changeDraw', state.drawer);
    });
  });
});
