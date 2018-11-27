import { connect } from 'react-redux';
import { getGreeting, getName } from '../../selectors/controls';
import Display from '../../components/display/display';

const mapStateToProps = state => ({
  greeting: getGreeting(state),
  name: getName(state)
});

export default connect(mapStateToProps)(Display);
