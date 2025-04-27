import React from 'react';
import './ProductShowcase.css';

import Macbook7 from '../assets/img/mac7.jpg';
import Macbook8 from '../assets/img/mac8.jpg';
import Macbook1 from '../assets/img/mac1.jpg';
import Macbook2 from '../assets/img/mac2.jpg';
import Macbook3 from '../assets/img/mac3.jpg';
import Macbook4 from '../assets/img/mac4.jpg';
import Macbook5 from '../assets/img/mac5.jpg';
import Macbook6 from '../assets/img/mac6.jpg';
import Banner from '../assets/img/banner.jpg';

import IPHONE16 from '../assets/img/IPH16.png';
import IPAD from '../assets/img/ipad.png';
import IPAD1 from '../assets/img/ipad1.jpg';
import IPAD2 from '../assets/img/ipad2.jpg';
import IPAD3 from '../assets/img/ipad3.jpg';
import IPAD4 from '../assets/img/ipad4.jpg';
import IPAD5 from '../assets/img/ipad5.jpg';
import IPAD6 from '../assets/img/ipad6.jpg';

import airpods from '../assets/img/airpods.jpg';
import apple from '../assets/img/apple.jpg';
import applemagic from '../assets/img/applemagic.jpg';
import cableapple from '../assets/img/cableapple.jpg';
import USB from '../assets/img/USB.jpg';

import USBC from '../assets/img/USB-C.jpg';
import APPLEARPODS from '../assets/img/APPLEEARPODS.jpg';
import APPLEUSBC from '../assets/img/APPLEUSB-C.jpg';
import POWERADAPTER from '../assets/img/POWERADAPTER.jpg';
import APPLEPENCIL from '../assets/img/APPLEPENCIL.jpg';


function ProductShowcase() {
  const smallMacbooks = [
    { id: 1, name: 'MacBook Air 13" Apple M2 8coeurs CPU 8 Coeurs GPU - 8Gb SSD 256Go - Midnight', price: '4699,000 TND', image: Macbook1 },
    { id: 2, name: 'MacBook Air 13" Apple M2 CPU 8C GPU 8C SSD 256Go - Starlight', price: '4199,000 TND', image: Macbook2 },
    { id: 3, name: 'MacBook Air 13" Apple M3 CPU 8C GPU 8C 16GB SSD 256Go - Midnight', price: '4999,000 TND', image: Macbook3 },
    { id: 4, name: 'MacBook Air 13" Apple M3 CPU 8C GPU 10C 24GB SSD 512Go - Space Grey', price: '6689,000 TND', image: Macbook4 },
    { id: 5, name: 'MacBook Air 13" Apple M1 CPU 8ceours GPU 7coeurs - SSD 256Go - Space Grey', price: '3099,000 TND', image: Macbook5 },
    { id: 6, name: 'MacBook Pro 14" Puce Apple M3 CPU 8coeurs 10coeurs GPU SSD 512Go - Space Grey', price: '6699,000 TND', image: Macbook6 },
  ];

  const smallIPADS = [
    { id: 1, name: 'iPad 10th gen. Wi-Fi 64Go - Bleu', price: '1799,000 TND', image: IPAD1 },
    { id: 2, name: 'iPad 10th gen. Wi-Fi - 64Go - Silver', price: '1549,000 TND', image: IPAD2 },
    { id: 3, name: 'Marshall Enceinte Bluetooth Uxbridge - Cream', price: '999,000 TND', image: IPAD3 },
    { id: 4, name: 'Enceinte Portable Étanche JBL FLIP 6', price: '529,000 TND', image: IPAD4 },
    { id: 5, name: 'Enceinte Portable Bluetooth JBL PARTYBOX ON-THE-GO ESSENTIAL', price: '1339,000 TND', image: IPAD5 },
    { id: 6, name: 'HARMAN KARDAN LUNA - BLACK', price: '659,000 TND', image: IPAD6 },
  ];

  return (
    <section className="product-showcase">
      
      {/* Bloc Macbook */}
      <div className="macbook">
        <div className="left-column">
          <img src={Macbook7} alt="Big MacBook7" className="big-macbook" />
          <img src={Macbook8} alt="Big MacBook8" className="big-macbook" />
        </div>

        <div className="right-column">
          {smallMacbooks.map((product) => (
            <div className="small-product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Banner */}
      <div className="banner">
        <img src={Banner} alt="MacBook Banner" />
      </div>

      <h2 className='announcement'>Découvrez ce qu'il vous faut au meilleur prix.</h2>

      {/* Bloc iPhone + iPad */}
      <div className="content">
        <div className="left-column">
          <img src={IPHONE16} alt="IPHONE16 Big 1" className="big-IPHONE16" />
          <img src={IPAD} alt="IPAD 2" className="big-IPAD" />
        </div>

        <div className="right-column">
          {smallIPADS.map((product) => (
            <div className="small-product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      {/* 5 Small Photos in One Line */}
<div className="small-photos-line">
  <div className="small-photo-card">
    <img src={airpods} alt="aipods.jpg" />
    <h4>AirPods 4</h4>
    <p className="price">1099,000 TND</p>
  </div>
  <div className="small-photo-card">
    <img src={apple} alt="apple.jpg" />
    <h4>Apple Dual USB-C Power Adapter 35W (A2676)</h4>
    <p className="price">349,000 TND</p>
  </div>
  <div className="small-photo-card">
    <img src={applemagic} alt="applemagic.jpg" />
    <h4>Apple Magic Keyboard Folio French Pour iPad 10e gén (A2695)</h4>
    <p className="price">1299,000 TND</p>
  </div>
  <div className="small-photo-card">
    <img src={cableapple} alt="cableapple.jpg" />
    <h4>Câble Apple USB-C vers Lightning - 1m (MX0K2ZM/A)</h4>
    <p className="price">139,000 TND</p>
  </div>
  <div className="small-photo-card">
    <img src={USB} alt="USB.jpg" />
    <h4>USB-C Power Adapter 20W (A2347)</h4>
    <p className="price">149,000 TND</p>
  </div>

</div>

    {/* 5 Small Photos in One Line */}
<div className="small-photos-line">
  <div className="small-photo-card">
    <img src={USBC} alt="USB-C.jpg" />
    <h4>Apple USB-C Power Adapter 140W (A2452)</h4>
    <p className="price">599,000 TND</p>
  </div>
  <div className="small-photo-card">
    <img src={APPLEARPODS} alt="APPLEEARPODS.jpg" />
    <h4>Apple EarPods with Lightning Connector (A1748)</h4>
    <p className="price">135,000 TND</p>
  </div>
  <div className="small-photo-card">
    <img src={APPLEUSBC} alt="APPLEUSB-C.jpg" />
    <h4>Apple USB-C Vers Magsafe 3 Cable (2 m) (A2363)</h4>
    <p className="price">289,000 TND</p>
  </div>
  <div className="small-photo-card">
    <img src={POWERADAPTER} alt="POWERADAPTER.jpg" />
    <h4>Apple USB-C Power Adapter 140W (A2452)</h4>
    <p className="price">599,000 TND</p>
  </div>
  <div className="small-photo-card">
    <img src={APPLEPENCIL} alt="APPLEPENCIL.jpg" />
    <h4>Apple Pencil Pro pour iPad Pro M4 et iPad Air M2 2024</h4>
    <p className="price">849,000 TND</p>
  </div>
</div>

    </section>
  );
}

export default ProductShowcase;
