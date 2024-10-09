import React from "react";
import Showcase from "./Showcase";
import Introduction from "./Introduction/Introduction";
import Marketplace from "./Marketplace/Marketplace";
import Competitive from "./Competitive/Competitive";
import EmbraceInfinity from "./EmbraceInfinity/EmbraceInfinity";
import { useDocumentTitle } from "../../hooks";
import LastestNews from "./LastestNews";
import Introduction2 from "./Introduction2/Introduction2";
import { WoodDividerLight } from "./Home.styled";

const Home = () => {
  useDocumentTitle(
    "Axie Infinity - Battle, Collect, and Trade Collectible NFT Creatures"
  );

  return (
    <>
      <Introduction />
      <Introduction2/>
      {/* <Showcase /> */}
        
      <WoodDividerLight />
      <Showcase />
    
      <Marketplace />
      <Competitive />
      <EmbraceInfinity />
    </>
  );
};

export default Home;
