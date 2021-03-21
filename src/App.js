import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo, productDataThree } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Whats on my desk' data={productData} />
      <Products heading='Some more cool stuff' data={productDataTwo} />
      <Products heading='Some more cool stuff' data={productDataThree} />
      <Feature />
      <Footer />
    </Router>
  );
}

export default App;
