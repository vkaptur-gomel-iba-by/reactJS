import React from 'react';
import './App.css';
import CardComponent from './components/content/ComponentCard';
import HeaderComponent from './components/header/ComponentHeader';

function App() {
  return (
    <>
      <HeaderComponent head={{text:'Your advertising could be here'}}/>
      <CardComponent card={{caption:'Caption', text:'Some text'}}/> 
    </>
  );
}

export default App;