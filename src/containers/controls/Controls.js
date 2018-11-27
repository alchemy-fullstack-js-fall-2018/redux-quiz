import { connect } from 'react-redux';
import Controls from '../../components/controls/Controls';
import { getGreeting } from '../../selectors/greeting';
import { greetingChange } from '../../actions/greeting';

const mapStateToProps = state => ({
  text: getGreeting(state)
});

const mapDispatchToProps = dispatch => ({
  onTextChange: ({ target }) => dispatch(greetingChange(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
