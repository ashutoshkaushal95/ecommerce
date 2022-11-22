import React from 'react';

import { Product, HeroBanner, FooterBanner } from '../components';

const Home = () => {
  return (
    <>
      <HeroBanner />

      <div className='products-heading'>
        <h2>Best Selling Headphones</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {['product 1', 'products 2'].map((product) => product)}
      </div>

      <FooterBanner />  
    </>
  )
}

export default Home