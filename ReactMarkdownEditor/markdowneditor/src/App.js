import React, { Component } from 'react';
import MarkdownEditor from './pages/markdown-editor'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MarkdownEditor />
      </div>
    );
  }
}

export default App;
