import { GREETING_CHANGE, greetingChange } from './greeting';

describe('greeting actions', () => {
  it('can create a greeting change action', () => {
    const action = greetingChange('hello');

    expect(action).toEqual({
      type: GREETING_CHANGE,
      payload: 'hello'
    });
  });
});