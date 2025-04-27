import React from 'react';
import './ProductGrid.css';
import Macbook from '../assets/img/laptop.jpg'; 
import Iphone from '../assets/img/phone.jpg'; 
import AppleWatch from '../assets/img/watch.jpg';
import AirPods from '../assets/img/headphone.jpg'; 

function ProductGrid() {
  const products = [
    { id: 1, name: 'MacBook Air M2', price: '5,200 TND', image: Macbook },
    { id: 2, name: 'iPhone 15 Pro', price: '6,300 TND', image: Iphone },
    { id: 3, name: 'Apple Watch Ultra 2', price: '3,100 TND', image: AppleWatch },
    { id: 4, name: 'AirPods Pro 2', price: '1,200 TND', image: AirPods },
  ];

  return (
    <section className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p className="price">{product.price}</p>
        </div>
      ))}
    </section>
  );
}

export default ProductGrid;
