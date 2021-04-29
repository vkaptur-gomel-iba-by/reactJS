import React from 'react';
import './App.css';
import Card from './components/content/Card';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header text="Your advertising could be here" />
      <Card
        card={{
          caption: 'Random text',
          text: 'The European languages are members of the same family.',
        }}
      />
    </>
  );
}

export default App;
