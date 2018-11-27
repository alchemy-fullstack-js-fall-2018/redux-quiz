import { connect } from 'react-redux';
import { getName } from '../../selectors/name';
import { getGreeting } from '../../selectors/greeting';
import Display from '../../components/display/Display';

const mapStatetoProps = state => ({
  name: getName(state),
  greeting: getGreeting(state)
});

export default connect(
  mapStatetoProps
)(Display);
