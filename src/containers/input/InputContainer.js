import { connect } from 'react-redux';
import Input from '../../components/input/Input';
import { getInputTerm } from '../../selectors/getGreeting';
import { updateInputTerm } from '../../actions/GREETING_CHANGE';

const mapStateToProps = state => ({
  inputValue: getInputTerm(state)
});

const mapDispatchToProps = dispatch => ({
  onChangeInput: ({ target }) => dispatch(updateInputTerm(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
