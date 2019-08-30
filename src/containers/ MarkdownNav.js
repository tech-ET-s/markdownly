import { connect } from 'react-redux';
import MarkdownList from '../components/list/MarkdownList';
import { getMdFiles } from '../selectors/markdownSelectors';
import { updateActiveStatus } from '../actions/markdownActions';

const mapStatetoProps = state => ({
  markdowns: getMdFiles(state)
});

const mapDispatchToProps = dispatch => ({
  clickHandler(index) {
    
    dispatch(updateActiveStatus(index));
  }
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(MarkdownList);
