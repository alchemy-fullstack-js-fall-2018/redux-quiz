import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Controls extends PureComponent {
  static propTypes = {
    changeName: PropTypes.func.isRequired,
    changeGreeting: PropTypes.func.isRequired
  };

  state = {
    name: '',
    greeting: ''
  };

  onChange = event => {
    const { target } = event;
    this.setState({ [target.name]: target.value });
    this.changeName();
    this.changeGreeting();
  };

  changeName = () => {
    const { name } = this.state;
    this.props.changeName(name);
  };

  changeGreeting = () => {
    const { greeting } = this.state;
    this.props.changeGreeting(greeting);
  };

  render() {
    const { name, greeting } = this.state;

    return (

      <section>
        <label htmlFor="name">Name</label>
        <input
          name="name" type="text"
          value={name} onChange={this.onChange}
        ></input>
        <label htmlFor="greeting">Greeting</label>
        <input
          name="greeting" type="text"
          value={greeting} onChange={this.onChange}
        ></input>
      </section>
    );
  }



}
