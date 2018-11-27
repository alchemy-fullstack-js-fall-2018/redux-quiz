import { connect } from 'react-redux';
import { getText } from '../../selectors/text';
import Display from '../../components/display/Display';

const mapStateToProps = state => ({
  text: getText(state)
});

export default connect(mapStateToProps)(Display);
