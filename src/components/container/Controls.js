import { connect } from 'react-redux';
import Controls from '../presentational/Controls';
import { changeName } from '../../state/actions/name';
import { changeGreeting } from '../../state/actions/greeting';

const mapDispatchToProps = dispatch => ({
  changeGreeting: greeting => dispatch(changeGreeting(greeting)),
  changeName: name => dispatch(changeName(name))
});

export default connect(
  null, mapDispatchToProps
)(Controls);
