import {
  GREETING_CHANGE,
  changeGreeting
} from './greeting';

describe('greeting actions', () => {
  it('can create an change greeting action', () => {
    const action = changeGreeting('Hiya');

    expect(action).toEqual({
      type: GREETING_CHANGE,
      payload: 'Hiya'
    });
  });

});
