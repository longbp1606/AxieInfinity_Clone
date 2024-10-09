import styled from "styled-components";
import WoodenBackground from '../../../assets/backgroud/backgroud-4.jpg';
import News1BG from '../../../assets/table/table_2.png';
import News2BG from '../../../assets/table/table_3.png';
import News3BG from '../../../assets/table/table_4.png';
import ShowcaseMarketWoodDivider from '../../../assets/showcase/wood-divider-dark.png';


export const ShowcaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  padding: 20px;
`;

export const TelevisionContainer = styled.div`
  position: relative;
  width: 100%; 
  max-width: 800px; 
  height: auto; 
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const TelevisionFrame = styled.img`
  position: relative;
  width: 100%;
  height: auto;
  z-index: 2; /* Make the television frame on top */
`;

export const ThumbnailImage = styled.img`
  position: absolute;
  top: 5%; /* Adjust to fit the screen area */
  left: 9%;
  
  width: 83%; /* Ensure the thumbnail fits the television screen */
  height: 70%; 
  object-fit: cover; /* Maintain aspect ratio and fill the area */
  z-index: 1; /* Make sure the thumbnail is behind the television frame */
`;

export const VideoContainer = styled.div`
  position: absolute;
  top: 10%; /* Adjust to fit the screen area */
  left: 10%;
  width: 80%;
  height: 80%; /* Match the size of the thumbnail */
  z-index: 1; /* Ensure the video is behind the television frame */
  iframe {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Make sure the video fits the television screen */
  }
`;

export const PlayButton = styled.button`
  position: absolute;
  top: 30%;
  left: 40%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  padding: 5px; /* Reduce padding */
  width: 20px; /* Set a fixed width */
  height: 20px; /* Set a fixed height */
  cursor: pointer;
  z-index: 3; /* Ensure the play button is above the television and thumbnail */
  font-size: 16px; /* Adjust font size if text is used, or remove this if just an icon */
`;


export const GameInfo = styled.div`
  width: 60%;
  padding: 20px;
  text-align: center;
`;

export const GameTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

export const GameDescription = styled.p`
  font-size: 1.2em;
  color: #333;
`;

export const Button = styled.button`
  background-color: #b85d2e;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 10px;

  &:hover {
    background-color: #9b4825;
  }
`;

export const Divider = styled.img`
  width: 100%;
  margin: 10px 0;
`;

export const NotesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const NoteImage = styled.img`
  width: 100px;
  margin: 10px;
`;

// Latest News Section
export const ShowcaseWoodenBackground = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;
    background-image: url(${WoodenBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding-bottom: 80px;

    @media (max-width: 1280px) {
        gap: 70px;
    }
`;

export const LatestNewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1280px;
    margin: 0px auto;
`;

export const LatestNewsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    & h2{
    margin: 0px;
    font-weight: 300;
    text-transform: uppercase;
    text-align: left;
    font-size: 5rem;
    color: rgb(240, 220, 192);
    font-family: Rowdies, serif;
    line-height: 1.2;
    font-weight: 500;

    @media (max-width: 1280px) {
        padding-top: 28px;
        -webkit-box-align: center;
        align-items: center;
        max-width: 500px;
        margin: 0px auto;
    }
    }
`;

export const NewsContainer = styled.div`
    display: flex;
    flex-flow: wrap;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 16px;

    @media (max-width: 1280px) {
        padding: 0px 20px;
    }
`;


export const NewsWrapper = styled.div`
  position: relative;
  max-width: 412px;
  width: calc(33.3333% - 5.33333px);
  aspect-ratio: 412 / 440;
  min-width: 320px;
  
  @media (max-width: 1280px) {
    width: calc(50% - 8px);
  }
`;

export const News1Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-image: url(${News1BG});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: drop-shadow(rgba(0, 0, 0, 0.5) 0px 8px 10px);
`;

export const News1Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    gap: 13px;
    padding: 20% 9%;
    transform: rotate(3deg);

    & a{
    margin: 0px;
    color: rgb(255, 255, 255);
    text-decoration: none;
    }
`;

export const News1Img = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F56f3ada4-f88d-48ea-beb4-19dc2c773f6f_2400x1350.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    border-radius: 20px;
    width: 100%;
    aspect-ratio: 1456 / 844;
`;

export const News1Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    & p:first-child {
    margin: 0px;
    font-family: "Roboto Slab", serif;
    text-align: center;
    font-size: 24px;
    color: rgb(112, 53, 25);
    font-weight: 800;
    line-height: 1.4;
    }

    & p:last-child{
    margin: 0px;
    font-family: "Roboto Slab", serif;
    font-size: 2rem;
    text-align: center;
    color: rgb(112, 53, 25);
    font-weight: 550;
    line-height: 1.5;
    }
`;

export const News2Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-image: url(${News2BG});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: drop-shadow(rgba(0, 0, 0, 0.5) 0px 8px 10px);
`;

export const News2Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    gap: 13px;
    padding: 20% 9%;
    transform: rotate(0deg);

    & a{
    margin: 0px;
    color: rgb(255, 255, 255);
    text-decoration: none;
    }
`;

export const News2Img = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fed3b344e-da13-42ab-b24e-610f267c7df3_2400x1350.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    border-radius: 20px;
    width: 100%;
    aspect-ratio: 1456 / 844;
`;

export const News2Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    & p:first-child {
    margin: 0px;
    font-family: "Roboto Slab", serif;
    text-align: center;
    font-size: 24px;
    color: rgb(112, 53, 25);
    font-weight: 800;
    line-height: 1.4;
    }

    & p:last-child{
    margin: 0px;
    font-family: "Roboto Slab", serif;
    font-size: 2rem;
    text-align: center;
    color: rgb(112, 53, 25);
    font-weight: 550;
    line-height: 1.5;
    }
`;

export const News3Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-image: url(${News3BG});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: drop-shadow(rgba(0, 0, 0, 0.5) 0px 8px 10px);
`;

export const News3Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    gap: 13px;
    padding: 20% 9%;
    transform: rotate(-3deg);

    & a{
    margin: 0px;
    color: rgb(255, 255, 255);
    text-decoration: none;
    }
`;

export const News3Img = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F48d504ce-2e11-4283-b172-b85ad3665b19_2400x1350.png);    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    border-radius: 20px;
    width: 100%;
    aspect-ratio: 1456 / 844;
`;

export const News3Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    & p:first-child {
    margin: 0px;
    font-family: "Roboto Slab", serif;
    text-align: center;
    font-size: 24px;
    color: rgb(112, 53, 25);
    font-weight: 800;
    line-height: 1.4;
    }

    & p:last-child{
    margin: 0px;
    font-family: "Roboto Slab", serif;
    font-size: 2rem;
    text-align: center;
    color: rgb(112, 53, 25);
    font-weight: 550;
    line-height: 1.5;
    }
`;

export const ShowcaseMarketDivider = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${ShowcaseMarketWoodDivider});
    background-repeat: repeat-x;
    background-size: cover;
    background-position: center center;
    height: 56px;
    width: 100%;
    z-index: 2;

`;

// End Latest News Section