import { connect } from 'react-redux';
import Document from '../components/markdown/Document';
import { getBody, getActiveFile } from '../selectors/markdownSelectors';
import { updateMdBody } from '../actions/markdownActions';

const mapStateToProps = (state) => {
  // const index = getActiveFile(state)[0];
  // console.log(index, '### hkljl ###');
  return {
    markdown: getBody(state, 0)
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateMarkdown({ target }) {
    dispatch(updateMdBody(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);
