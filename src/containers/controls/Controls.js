import { connect } from 'react-redux';
import Controls from '../../components/controls/Controls';
import { getName } from '../../selectors/name';
import { getGreeting } from '../../selectors/greeting';
import { nameChange } from '../../actions/name';
import { greetingChange } from '../../actions/greeting';

const mapStateToProps = state => ({
  nameValue: getName(state),
  greetingValue: getGreeting(state)
});

const mapDispatchToProps = dispatch => ({
  onNameChange: ({ target }) => dispatch(nameChange(target.value)),
  onGreetingChange: ({ target }) => dispatch(greetingChange(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);

