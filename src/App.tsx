import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';
import Projectpreview from './components/Projectpreview';

function App() {
  return (
    <div>
      <Header />
      <Profile />
      <Projectpreview />
      <Footer />
    </div>
  );
}

export default App;
