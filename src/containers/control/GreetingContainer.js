import { connect } from 'react-redux';
import Input from '../../components/input/Input';
import { getInputGreeting } from '../../selectors/greeting';
import { updateInputGreeting } from '../../actions/greeting';

const mapStateToProps = state => ({
  inputValue: getInputGreeting(state)
});

const mapDispatchToProps = dispatch => ({
  onChangeInput: ({ target }) => dispatch(updateInputGreeting(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
