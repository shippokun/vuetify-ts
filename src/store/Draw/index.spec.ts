import { draw } from './index';
import { DrawState } from '../types';

describe('draw/index.ts', () => {
  it('state', () => {
    const state: DrawState = {
      drawer: false,
    };

    expect(draw.state).toEqual(state);
  });
});
