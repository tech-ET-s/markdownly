import React from 'react';
import MarkdownEditor from '../containers/MarkdownEditor';
import SaveMdFiles from '../containers/SaveMdFiles';
import MarkdownNav from '../containers/ MarkdownNav';

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
