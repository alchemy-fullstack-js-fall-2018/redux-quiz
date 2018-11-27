import { connect } from 'react-redux';

import { getGreeting, getName } from '../../selectors/greeting';
import Display from '../../components/display/Display';


const mapStateToProps = state => ({
  greeting: getGreeting(state),
  name: getName(state),
});

export default connect(
  mapStateToProps
)(Display);
