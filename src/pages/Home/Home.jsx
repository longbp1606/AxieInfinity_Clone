import React from 'react'
import EmbraceInfinity from './EmbraceInfinity/EmbraceInfinity';
import { useDocumentTitle } from '../../hooks';

const Home = () => {
  useDocumentTitle('Axie Infinity - Battle, Collect, and Trade Collectible NFT Creatures');
  
  return (
    <>
      <EmbraceInfinity/>
    </>
  )
}

export default Home;