import React from 'react';
import { shallow } from 'enzyme';
import Controls from '../Controls';

describe('<Controls />', () => {
  test('renders', () => {
    const changeName = jest.fn();
    const changeGreeting = jest.fn();
    const wrapper = shallow(
      <Controls
        changeName={changeName}
        changeGreeting={changeGreeting}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
