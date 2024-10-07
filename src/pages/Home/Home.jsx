import React from 'react';
import Showcase from './Showcase';
import Introduction from './Introduction/Introduction';
import Marketplace from './Marketplace/Marketplace';
import Competitive from './Competitive/Competitive';
import EmbraceInfinity from './EmbraceInfinity/EmbraceInfinity';
import { useDocumentTitle } from '../../hooks';

const Home = () => {
  useDocumentTitle('Axie Infinity - Battle, Collect, and Trade Collectible NFT Creatures');
  
  return (
    <>
      <Introduction/>
      <Showcase/>
      <Marketplace/>
      <Competitive/>
      <EmbraceInfinity/>
    </>
  )
}

export default Home;
