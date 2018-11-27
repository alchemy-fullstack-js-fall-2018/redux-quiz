import { getName, getGreeting } from './text';

describe('selectors', () => {
  const state = {
    name: 'Mike',
    greeting: 'Hello'
  };

  it('returns a name', () => {
    const testName = getName(state);
    expect(testName).toEqual(state.name);
  });

  it('returns a greeting', () => {
    const testGreeting = getGreeting(state);
    expect(testGreeting).toEqual(state.greeting);
  });
});
