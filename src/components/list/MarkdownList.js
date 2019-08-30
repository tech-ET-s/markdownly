import React from 'react';
import PropTypes from 'prop-types';

function MarkdownList({ markdowns, clickHandler }) {
  const markdownList = markdowns.map((markdown, index) => (
    <li key={index} onClick={() => clickHandler(index)}>
      <h1>{markdown.title}</h1>
    </li>
  ));
  return (
    <ul>
      {markdownList}
    </ul>
  );
}

MarkdownList.propTypes = {
  markdowns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  })).isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default MarkdownList;
