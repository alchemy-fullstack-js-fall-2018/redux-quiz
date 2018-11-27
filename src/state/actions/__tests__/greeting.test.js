import { GREETING_CHANGE, changeGreeting } from '../greeting';

describe('greeting action', () => {

  test('changes greeting', () => {
    const greeting = 'asdf';
    const action = changeGreeting(greeting);
    expect(action.type).toEqual(GREETING_CHANGE);
    expect(action.payload).toEqual(greeting);
  });
});
