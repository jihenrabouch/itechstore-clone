import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import ProductShowcase from './components/ProductShowcase';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProductShowcase />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default App;
