import React from 'react';
import './App.css';
import '@picocss/pico'
import Form from './components/Forms';
import Form2 from './components/Forms2'

function App() {
  return (
    <div className="App">
      <header className="container">
        <Form />
        <Form2 />
      </header>
    </div>
  );
}

export default App;
