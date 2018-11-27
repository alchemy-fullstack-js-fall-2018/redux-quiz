import { GREETING_CHANGE, greetingChange } from './greeting';

describe('greeting actions', () => {
  it('can change the greeting', () => {
    const action = greetingChange('My name is...');

    expect(action).toEqual({
      type: GREETING_CHANGE,
      payload: 'My name is...'
    });
  });
});
