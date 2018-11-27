import { connect } from 'react-redux';
import Input from '../../components/input/Input';
import { getName } from '../../selectors/name';
import { updateName } from '../../actions/name';

const mapStateToProps = state => ({
  inputValue: getName(state)
});

const mapDispatchToProps = dispatch => ({
  onChangeInput: ({ target }) => dispatch(updateName(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
