import React from 'react';
import './App.css';
import Foods from './components/Foods/Foods';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Header></Header>
      <Foods></Foods>
      <Footer></Footer>
    </div>
  );
};

export default App;