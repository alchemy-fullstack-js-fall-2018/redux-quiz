import { connect } from 'react-redux';
import getGreeting from '../../selectors/getGreeting';
import getName from '../../selectors/getName';
import Display from '../../components/display/Display';

const mapStateToProps = state => ({
  greeting: getGreeting(state),
  name: getName(state),
});

export default connect(
  mapStateToProps
)(Display);
