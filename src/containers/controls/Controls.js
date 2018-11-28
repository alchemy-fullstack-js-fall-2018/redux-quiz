import { connect } from 'react-redux';
import Controls from '../../components/controls/Controls';
import { getGreeting } from '../../selectors/greeting';
import { getName } from '../../selectors/name';
import { greetingChange } from '../../actions/greeting';
import { nameChange } from '../../actions/name';

const mapStateToProps = state => ({
  greeting: getGreeting(state),
  name: getName(state)
});

const mapDispatchToProps = dispatch => ({
  onGreetingChange: ({ target }) => dispatch(greetingChange(target.value)),
  onNameChange: ({ target }) => dispatch(nameChange(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
