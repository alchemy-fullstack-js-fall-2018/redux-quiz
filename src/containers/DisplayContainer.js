import { connect } from 'react-redux';
import { getName } from '../selectors/name';
import { getGreeting } from '../selectors/greeting';
import Display from '../components/display/Display';

const mapStateToProps = (state) => ({
  greeting: getGreeting(state),
  name: getName(state)
});

export default connect(mapStateToProps)(Display);
