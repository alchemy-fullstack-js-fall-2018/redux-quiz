import React from 'react';
import { shallow } from 'enzyme';
import Controls from '../Controls';

describe('<Controls />', () => {
  test('renders', () => {
    const changeName = jest.fn();
    const changeGreeting = jest.fn();
    const name = 'the dude';
    const greeting = 'abide, sir';
    const wrapper = shallow(
      <Controls
        name={name}
        greeting={greeting}
        changeName={changeName}
        changeGreeting={changeGreeting}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
