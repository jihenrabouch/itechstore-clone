import React from 'react';
import './MacBookGrid.css';

const MacBookGrid = () => {
  const products = [
    {
      title: "MacBook Pro",
      price: "",
      description: "",
      cta: "Acheter"
    },
    {
      title: "MacBook Air 15\"",
      price: "",
      description: "",
      cta: "Acheter"
    },
    {
      title: "MacBook Air 12\" Apple M2",
      price: "4 689,000 THD",
      description: "8cœurs CPU 8 cœurs GPU - 256GB - Midnight",
      store: "xevelope/store"
    },
    {
      title: "MacBook Air 12\" Apple M2",
      price: "4 189,000 THD",
      description: "CPU 8C GPU 8C - 256GB - Starlight",
      store: "xevelope/store"
    },
    {
      title: "MacBook Air 12\" Apple M3",
      price: "4 889,000 THD",
      description: "CPU 8C GPU 8C - 256GB - Midnight",
      badge: "CRL CPU 6G S3"
    },
    {
      title: "MacBook Pro",
      price: "",
      description: "",
    },
    {
      title: "MacBook Air 12\" Apple M3",
      price: "6 689,000 THD",
      description: "CPU 8C GPU 10cœurs - 512GB - Space Grey",
    },
    {
      title: "MacBook Air 12\" Apple M1",
      price: "3 089,000 THD",
      description: "CPU 8cœurs GPU 7cœurs - 256GB - Space Grey",
      store: "xevelope/store"
    },
    {
      title: "MacBook Pro 14\" Puce Apple M3",
      price: "6 689,000 THD",
      description: "CPU 8C GPU 10cœurs - 256GB - Space Grey",
      store: "xevelope/store",
      badge: "CRL CPU 6G S3"
    }
  ];

  return (
    <div className="macbook-grid">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          {product.badge && <span className="product-badge">{product.badge}</span>}
          <h2>{product.title}</h2>
          {product.description && <p className="description">{product.description}</p>}
          {product.price && <p className="price">{product.price}</p>}
          {product.store && <p className="store">{product.store}</p>}
          {product.cta && <button className="cta-button">{product.cta}</button>}
        </div>
      ))}
    </div>
  );
};

export default MacBookGrid;