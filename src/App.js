import React from 'react';
import './App.css';
import Card from './components/content/Card';
import ViewCheckBox from './components/content/VeiwCheckBox';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header text="Your advertising could be here" />
      <ViewCheckBox />
      <Card
        card={{
          caption: 'Random text.',
          text: 'Random title.',
        }}
      />

      <Card
        card={{
          caption: 'Random text.',
          text: 'Random title.',
        }}
      />
      <Card
        card={{
          caption: 'Random text.',
          text: 'Random title.',
        }}
      />
      <Card
        card={{
          caption: 'Random text.',
          text: 'Random title.',
        }}
      />
      <Card
        card={{
          caption: 'Random text.',
          text: 'Random title.',
        }}
      />
      <Card
        card={{
          caption: 'Random text.',
          text: 'Random title.',
        }}
      />
      <Card
        card={{
          caption: 'Random text.',
          text: 'Random title.',
        }}
      />
      <Card
        card={{
          caption: 'Random text.',
          text: 'Random title.',
        }}
      />
    </div>
  );
}

export default App;
