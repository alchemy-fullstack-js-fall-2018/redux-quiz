import { connect } from 'react-redux';
import Display from '../presentational/Display';
import { getName } from '../../state/selectors/name';
import { getGreeting } from '../../state/selectors/greeting';

const mapStateToProps = (state, props) => ({
  name: getName(state),
  greeting: getGreeting(state)
});

export default connect(mapStateToProps)(Display);
