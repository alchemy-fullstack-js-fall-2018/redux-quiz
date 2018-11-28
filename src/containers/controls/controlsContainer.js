import { connect } from 'react-redux';
import Controls from '../../components/controls/controls';
import { getGreeting, getName } from '../../selectors/controls';
import { updateGreetingChange, updateNameChange } from '../../actions/controls';

const mapStateToProps = state => ({
  greetingValue: getGreeting(state),
  nameValue: getName(state),
  greetingLabel: 'Enter Greeting:',
  nameLabel: 'Enter Name:'
});

const mapDispatchToProps = dispatch => ({
  onGreetingInput: ({ target }) => dispatch(updateGreetingChange(target.value)),
  onNameInput: ({ target }) => dispatch(updateNameChange(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
