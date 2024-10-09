import styled, { css } from "styled-components";
import WoodenBackground from '../../../assets/backgroud/backgroud-4.jpg';
import News1BG from '../../../assets/table/table_2.png';
import News2BG from '../../../assets/table/table_3.png';
import News3BG from '../../../assets/table/table_4.png';
import ShowcaseMarketWoodDivider from '../../../assets/showcase/wood-divider-dark.png';
import { Button, Flex } from "antd";
import { theme } from "../../../themes";
import ButtonDark from '../../../assets/button/dark-188.png';
import ButtonLight from '../../../assets/button/light-188.png';


export const ShowcaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  margin: 0px auto;
`;

export const ShowcaseContainer = styled(Flex)`
  flex-direction: column;
  position: relative;
`;

export const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: 840fr 440fr;
  gap: 16px;
  padding-top: 72px;
`;

export const TelevisionWrapper = styled(Flex)`
  max-width: 846px;
  width: 100%;
  margin: 0px auto;
`;

export const TelevisionContainer = styled.div`
  position: relative;
  width: 100%; 
`;


export const TelevisionFrame = styled.img`
  position: relative;
  width: 100%;
  height: auto;
  z-index: 2; /* Make the television frame on top */
`;

export const ThumbnailContainer = styled.div`
  z-index: 2;
  border-radius: 40px;
  overflow: hidden;

  & img {
    width: 100%;
  }
`;

export const ScreenContainer = styled(Flex)`
  position: absolute;
  top: 5.5%;
  left: 8.5%;
  width: 83%;
`;

export const ThumbnailImage = styled.img``;

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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  border-radius: 50%;
  padding: 5px; /* Reduce padding */
  width: 14.2%; /* Set a fixed width */
  cursor: pointer;
  z-index: 3; /* Ensure the play button is above the television and thumbnail */
  background: transparent;
  filter: drop-shadow(rgba(0, 0, 0, 0.5) 0px 8px 20px);

  & img {
    width: 100%;
  }
`;

export const GameInfo = styled(Flex)`
  gap: 24px;
  padding-top: 12%;
`;

export const GameLogoContainer = styled(Flex)`
  & .ant-image {
    width: 160px;
  }
`;

export const GameIntroduction = styled(Flex)`
  & h2.ant-typography {
    font-family: ${theme.fonts.rowdies};
    color: ${theme.colors.textLore};
    text-transform: uppercase;
    font-size: 4.5rem;
    font-weight: 600;
  }

  & span.ant-typography {
    color: ${theme.colors.textLore};
    font-size: 2rem;
    font-weight: 600;
  }
`;

export const GameDescription = styled.p`
  font-size: 1.2em;
  color: #333;
`;

export const ButtonContainer = styled(Flex)`
  gap: 20px;
`;

export const ButtonTemplate = css`
  width: 188px;
  height: 60px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  font-family: ${theme.fonts.rowdies};
  font-size: 2.25rem;
  color: ${theme.colors.textForWoodBackground};
  transition: transform 0.2s;
  background: transparent;
  border: none;
`;

export const PlayNowButton = styled(Button)`
  ${ButtonTemplate}
  background-image: url(${ButtonDark});
`;

export const WatchTrailerButton = styled(Button)`
  ${ButtonTemplate}
  background-image: url(${ButtonLight});
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

export const NoteImageTemplate = css`
  position: absolute;
  z-index: 10;
`;

export const NoteImage = styled.img`
  ${NoteImageTemplate}
  top: 0px;
  left: 0px;
  transform: translateY(-20%);
  max-width: 146px;
`;

export const NoteImage2 = styled.img`
  ${NoteImageTemplate}
  top: 0px;
  right: 0px;
  transform: translateY(-20%);
  max-width: 110px;
`;

export const NoteImage3 = styled.img`
  ${NoteImageTemplate}
  transform: translate(86%, 32%);
  bottom: 0px;
  right: 0px;
  max-width: 192px;
`;

export const NoteImage4 = styled.img`
  ${NoteImageTemplate}
  transform: translateY(-10%);
  bottom: 0px;
  right: 0px;
  max-width: 129px;
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