import React from 'react';
import personalImage from './assets/images/matthew.jpg';
import LanguagesList from './components/languages';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="intro">
          <img src={personalImage} className="personal-image" alt="logo" />
          <div className="description">
            <p className="bold">Matthew Gaim</p>
            <p>I'm a 3<text class="sup">rd</text> year Computer Science student at University of California: Santa Cruz🐌 </p>
            <p>I'm currently working on an app, <a href="https://github.com/matthewgaim/Stonks" class='stonksLink'>Stonks</a>, where users can practice trading with fake money, aka paper trading.</p>
            <p>I've previously interned at OSIsoft as an IT Support Intern where I got to use PowerShell to automate everyday tasks</p>
          </div>
        </div>
        <LanguagesList />
      </div>
      <Contact />
    </div>
  );
}

export default App;
