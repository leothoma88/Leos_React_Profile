import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import Aboutme from './components/Aboutme';
import Socialnetwork from './components/Socialnetwork';
import Contact from './components/Contact';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Aboutme />
      <Card />
      <Socialnetwork />
      <Contact />
      
    
    </div>
  );
}

export default App;
