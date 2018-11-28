import { connect } from 'react-redux';
import Control from '../components/control/Control';
import { nameChange } from '../actions/name';
import { greetingChange } from '../actions/greeting';
import { getGreeting } from '../selectors/greeting';
import { getName } from '../selectors/name';

const mapStateToProps = state => ({
  inputValue1: getGreeting(state),
  inputValue2: getName(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeInput: ({ target }) => dispatch(greetingChange(target.value));
  onChangeInput: ({ target }) => dispatch(nameChange(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Control);
