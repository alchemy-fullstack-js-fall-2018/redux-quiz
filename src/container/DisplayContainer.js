import { connect } from 'react-redux';
import { getGreeting } from '../selectors/greeting';
import { getName } from '../selectors/name';
import Display from '../components/display/Display';

const mapStateToProps = state => ({
  text: getSearchTerm(state),
  color: getSearchColor(state),
  backgroundColor: getBackgroundColor(state)
});

export default connect(
  mapStateToProps
)(Display)
