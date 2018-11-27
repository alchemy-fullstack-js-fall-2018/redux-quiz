import { GREETING_CHANGE, changeGreeting } from './greeting';

describe('greeting actions', () => {
  const newGreeting = 'hey bud';

  it('creates an action to change the greeting', () => {
    expect(changeGreeting(newGreeting)).toEqual({
      type: GREETING_CHANGE,
      payload: 'hey bud'
    });
  });
});
