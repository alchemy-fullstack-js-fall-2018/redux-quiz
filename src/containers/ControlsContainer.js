import { connect } from 'react-redux';
import Controls from '../components/Controls/Controls';
import { getName } from '../selectors/name';
import { getGreeting } from '../selectors/greeting';
import { changeName } from '../actions/name';
import { changeGreeting } from '../actions/greeting';

const mapStateToProps = state => ({
  name: getName(state),
  greeting: getGreeting(state),
});

const mapDispatchToProps = dispatch => ({
  updateName: ({ target }) => dispatch(changeName(target.value)),
  updateGreeting: ({ target }) => dispatch(changeGreeting(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
