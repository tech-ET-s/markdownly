import { connect } from 'react-redux';
import Document from '../components/markdown/Document';
import { getBody } from '../selectors/markdownSelectors';
import { updateMdBody } from '../actions/markdownActions';

const mapStateToProps = state => ({
  markdown: getBody(state)
});

const mapDispatchToProps = dispatch => ({
  updateMarkdown({ target }) {
    dispatch(updateMdBody(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);
