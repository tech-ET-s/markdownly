import { connect } from 'react-redux';
import AddMarkdown from '../components/form/AddMarkdown';
import { getFormInput } from '../selectors/markdownSelectors';
import { updateFormInput, addMdFile, clearFormInput } from '../actions/markdownActions';

const mapStateToProps = state => ({
  formInput: getFormInput(state)
});

const mapDispatchToProps = dispatch => ({
  formInputChange({ target }) {
    const action = updateFormInput(target.value);
    dispatch(action);
  },
  formInputSubmit(event, title) {
    event.preventDefault();
    const action = addMdFile(title);
    dispatch(action);
    dispatch(clearFormInput());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMarkdown);
