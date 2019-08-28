import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Preview from './Preview';
import Editor from './Editor';
import styles from './Document.css';

export default class Document extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    updateMarkdown: PropTypes.func.isRequired
  };

  render() {
    const { text, updateMarkdown } = this.props;
    return (
      <>
        <div className={styles.Document}>
          <Editor markdown={text} updateMarkdown={updateMarkdown} />
          <Preview markdown={text} />
        </div>
      </>
    );
  }
}
