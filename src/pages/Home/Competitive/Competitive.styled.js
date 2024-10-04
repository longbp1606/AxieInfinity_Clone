import styled from "styled-components";
import CompetitiveBackground0 from '../../../assets/competitive/background-0.jpg';
import CompetitiveBackground1 from '../../../assets/competitive/background-1.png';
import CompetitiveBackground2 from '../../../assets/competitive/background-2.png';
import CompetitiveWoodDivider from '../../../assets/competitive/wood-divider-light.png';
import CompetitiveButton from '../../../assets/competitive/button-dark.png';
import CloseVideoBackground from '../../../assets/competitive/square-wooden-button.png';
import CloseVideoIcon from '../../../assets/competitive/close-icon.png';
import { theme } from "../../../themes";


export const HomeWrapper = styled.div`
    font-size: 5em;
    color: red;
`;

export const DividerCompetitiveContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background-image: url(${CompetitiveWoodDivider});
    background-repeat: repeat-x;
    background-size: cover;
    background-position: center center;
    height: 36px;
    width: 100%;
    z-index: 2;
    margin-top: -18px;
`;

export const CompetitiveContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const Background0Container = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    position: relative;
    margin: 0px auto;
    z-index: 3;
`;

export const Background0Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${CompetitiveBackground0});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    min-width: 912px;
    min-height: 513px;
    position: relative;
`;

export const Background1Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    background-image: url(${CompetitiveBackground1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    max-width: 1400px;
    aspect-ratio: 1282 / 705;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
`;

export const Background2Container = styled.div`
    position: relative;
    aspect-ratio: 1440 / 866;
    overflow: hidden;
    width: 100%;
`;


export const Background2Wrapper = styled.div`
    background-image: url(${CompetitiveBackground2});
    background-position: center center;
    background-size: cover;
    position: absolute;
    inset: -60px 0px;
    will-change: transform;
    transform: translateY(-22.2562px);
`;

export const WoodenSignContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 406px;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);

    & h2 {
    position: absolute;
    bottom: 23%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    margin: 0px;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    font-size: 4rem;
    color: rgb(240, 220, 192);
    font-family: Rowdies, serif;
    line-height: 1.25;
    }
`;

export const WoodenSignWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const EnterTheArenaContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translateX(-50%) translateY(30%);
    z-index: 4;
    width: 100%;
`;

export const EnterTheArenaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1280px;
    margin: 0px auto;
`;

export const EnterTheArenaContent = styled.div`
    flex-direction: column;
    display: grid;
    grid-template-columns: 660fr 600fr;
    gap: 32px;
    width: 100%;
    position: relative;
    z-index: 3;

    @media (max-width: 1280px) {
        margin-top: 1150px;
        flex-direction: column;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        text-align: center;
        gap: 0px;
    }
`;


export const EnterTheArenaContentVideoButton = styled.div`
    transition: transform 0.2s ease;
    position: absolute;
    top: 50%;
    left: 46%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 3;
    width: 15.3%;
    filter: drop-shadow(rgba(0, 0, 0, 0.5) 0px 8px 20px);
    display: flex;
    flex-direction: column;
    cursor: pointer;

    & img {
        width: 100%;
    }
`;

export const EnterTheArenaContentVideo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 660px;
    position: relative;
    left: 4%;
    cursor: pointer;

    &:hover ${EnterTheArenaContentVideoButton} {
        cursor: pointer;
        transform: translateX(-50%) translateY(-50%) scale(1.1); 
    }
`;

export const EnterTheArenaContentVideoThumbnail = styled.div`
    position: absolute;
    top: 7%;
    left: 4%;
    width: 84%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    & img {
        width: 100%;
    }
`;

export const EnterTheArenaContentVideoFrame = styled.div`
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;

    & img {
        width: 100%;
    }
`;

export const EnterTheArenaContentText = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    padding-top: 29%;

    @media (max-width: 1280px) {
        padding-top: 28px;
        -webkit-box-align: center;
        align-items: center;
        max-width: 500px;
        margin: 0px auto;
    }
`;

export const EnterTheArenaContentTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    & header{
    text-shadow: rgba(83, 52, 57, 0.71) 0px 0px 10px;
    }

    & h2{
    margin: 0px;
    font-weight: 500;
    text-transform: uppercase;
    text-align: left;
    font-size: 4rem;
    color: rgb(240, 220, 192);
    font-family: Rowdies, serif;
    line-height: 1.25;
    }

    & p{
    margin: 0px;
    font-family: "Roboto Slab", serif;
    font-size: 16px;
    color: rgb(240, 220, 192);
    font-weight: 600;
    line-height: 24px;
    }

    @media (max-width: 1280px) {
        align-items: center;
        text-align: center;
    }
`;

export const EnterTheArenaContentButton = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;

    & button{
    margin-top: 36px;
    display: inline-flex;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    outline: 0px;
    border: 0px;
    margin: 0px;
    cursor: pointer;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-weight: 500;
    line-height: 1.75;
    min-width: 64px;
    padding: 6px 8px;
    border-radius: 4px;
    white-space: nowrap;
    background-image: url(${CompetitiveButton});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    user-select: none;
    width: 178px;
    height: 48px;
    font-family: Rowdies, serif;
    font-size: 2.25rem;
    text-transform: none;
    color: ${theme.colors.textForWoodBackground};    
    transition: transform 0.2s;
           
    &:hover{
        transform: scale(1.05);
        cursor: pointer;
    }
        
    }

    & button2{
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    z-index: 0;
    inset: 0px;
    border-radius: inherit;
    }
`;

export const VideoModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1500 !important;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); 
  z-index: 1501 !important;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 92%;
  height: 92%;
  background-color: #282828; 
  z-index: 1502 !important;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.9);
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 24px;
  right: 24px;
  width: 80px;
  height: 84.2105px;
  background-image: url(${CloseVideoBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1503 !important;
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }

  &::before {
    content: '';
    width: 54.7368px; 
    height: 54.7368px;
    background-image: url(${CloseVideoIcon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

