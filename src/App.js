import React from 'react';
import personalImage from './assets/matthew.jpg';
import LanguagesList from './components/languages';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="intro">
          <img src={personalImage} className="personal-image" alt="logo" />
          <div className="description">
            <p className="bold">Matthew Gaim</p>
            <p>I'm a 3<text class="sup">rd</text> year Computer Science student at University of California: Santa Cruz🐌 </p>
            <p>I've previously interned at OSIsoft as an IT Support Intern where I got to use PowerShell to automate everyday tasks</p>
            <p>Currently, I'm working on an app, Stonks, where people can practice trading with virtual money, aka paper trading.</p>
          </div>
        </div>
        
        <div class="languages">
          <LanguagesList />
        </div>

      </header>
    </div>
  );
}

export default App;
