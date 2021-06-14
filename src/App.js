import React from 'react';
import './App.css';
import Cards from './components/content';
import Header from './components/header';

const cards = [
  { id: 1, caption: 'Caption1', text: 'Random text1.' },
  { id: 2, caption: 'Caption2.', text: 'Random text2.' },
  { id: 3, caption: 'Caption3.', text: 'Random text3.' },
  { id: 4, caption: 'Caption4.', text: 'Random text4.' },
  { id: 5, caption: 'Caption5.', text: 'Random text5.' },
  { id: 6, caption: 'Caption6.', text: 'Random text6.' },
  { id: 7, caption: 'Caption7.', text: 'Random text7.' },
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
