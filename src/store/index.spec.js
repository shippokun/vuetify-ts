import store from './index';

describe('index.ts', () => {
  it('have Draw module', () => {
    expect(store.hasModule('draw')).toBeTruthy();
  });
});
