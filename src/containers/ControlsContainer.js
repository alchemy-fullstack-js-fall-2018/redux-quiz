import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import { changeGreeting, changeName } from '../actions/controls';
import { getName, getGreeting } from '../selectors/text';

const mapStateToProps = state => ({
  name: getName(state),
  greeting: getGreeting(state)
});

const mapDispatchToProps = dispatch => ({
  onChangeNameInput: ({ target }) => dispatch(changeName(target.value)),
  onChangeGreetingInput: ({ target }) => dispatch(changeGreeting(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
