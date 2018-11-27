import { connect } from 'react-redux';
import { getName } from '../selectors/name';
import { getGreeting } from '../selectors/greeting';
import Controls from '../components/controls/Controls';
import { changeGreeting } from '../actions/greeting';
import { changeName } from '../actions/name';

const mapStateToProps = (state) => ({
  greeting: getGreeting(state),
  name: getName(state)
});

const mapDispatchToProps = dispatch => ({
  handleGreetingChange: ({ target }) => dispatch(changeGreeting(target.value)),
  handleNameChange: ({ target }) => dispatch(changeName(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
