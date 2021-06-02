import React from 'react';
import './App.css';
import Cards from './components/content/Cards';
import Header from './components/header/Header';

const cards = [
  { id: 1, caption: 'Random text.', text: 'Random text.' },
  { id: 2, caption: 'Random text1.', text: 'Random text1.' },
  { id: 3, caption: 'Random text2.', text: 'Random text2.' },
];
function App() {
  return (
    <div>
      <Header text="Your advertising could be here" />
      <Cards cards={cards} />
    </div>
  );
}

export default App;
