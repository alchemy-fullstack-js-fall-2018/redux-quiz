import { connect } from 'react-redux';
import { getName } from '../../selectors/getName';
import { updateName } from '../../actions/NAME_CHANGE';

const mapStateToProps = state => ({
  inputValue: getName(state)
});

const mapDispatchToProps = dispatch => ({
  onChangeInput: ({ target }) => dispatch(updateName(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
