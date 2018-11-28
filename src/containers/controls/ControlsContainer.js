import { connect } from 'react-redux';
import { getGreeting } from '../../selectors/greeting';
import { updateGreeting } from '../../actions/text';
import Controls from '../../components/controls/Controls';


const mapStateToProps = state => ({
  greeting: getGreeting(state)
});

const mapDispatchToProps = dispatch => ({
  onChangeInput: ({ target }) => dispatch(updateGreeting(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);


