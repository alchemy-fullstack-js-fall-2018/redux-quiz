import { connect } from 'react-redux';
import { getInputGreeting } from '../../selectors/getGreeting';
import { updateInputGreeting } from '../../actions/GREETING_CHANGE';

const mapStateToProps = state => ({
  inputValue: getInputGreeting(state)
});

const mapDispatchToProps = dispatch => ({
  onChangeInput: ({ target }) => dispatch(updateInputGreeting(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
