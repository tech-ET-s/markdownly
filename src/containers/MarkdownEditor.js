import { connect } from 'react-redux';
import Document from '../components/markdown/Document';
import { getBody } from '../selectors/markdownSelectors';
import { updateMdBody } from '../actions/markdownActions';

const mapStateToProps = (state, index = 0) => ({
  markdown: getBody(state, index)
});

const mapDispatchToProps = dispatch => ({
  updateMarkdown({ target }) {
    dispatch(updateMdBody(target.value, 0));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);
