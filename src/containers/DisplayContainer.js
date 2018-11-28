import { connect } from 'react-redux';
import Display from '../components/display/Display';
import { getName, getGreeting } from '../selectors/text';

const mapStateToProps = state => ({
  name: getName(state),
  greeting: getGreeting(state)
});

export default connect(
  mapStateToProps
)(Display);
