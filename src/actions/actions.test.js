import {
  updateGreetingChange,
  UPDATE_GREETING_CHANGE,
  updateNameChange,
  UPDATE_NAME_CHANGE
} from './controls';


describe('Control Actions', () => {
  it('can create an update greeting input action', () => {
    const action = updateGreetingChange('Yo');

    expect(action).toEqual({
      type: UPDATE_GREETING_CHANGE,
      payload: 'Yo'
    });
  });

  it('can create an update name input action', () => {
    const action = updateNameChange('Toby');

    expect(action).toEqual({
      type: UPDATE_NAME_CHANGE,
      payload: 'Toby'
    });
  });

});
