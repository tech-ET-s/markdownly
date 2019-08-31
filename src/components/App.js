import React from 'react';
import MarkdownEditor from '../containers/MarkdownEditor';
import MarkdownNav from '../containers/MarkdownNav';
import SaveMdFiles from '../containers/SaveMdFiles';

export default function App() {
  return (
    <>
      <h1>Markdown Editor</h1>
      <MarkdownEditor />
      <SaveMdFiles />
      <MarkdownNav />
    </>
  );
}
