import styled from "styled-components";
import background4 from '../../../assets/backgroud/background-4.jpg';
import button from '../../../assets/button/button.png';
import button2 from '../../../assets/button/button_2.png';

export const ShowcaseWrapper = styled.div`
  background-image: url(${background4});
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  background-size: cover;
  background-position: center;
  padding: 20px;
  display: grid;
  grid-template-columns: 840fr 440fr;
  gap: 16px;
  padding-top: 72px;
`;

export const LogoContainer = styled.div`
    display: flex;
   
   
    margin-bottom: 10px; /* Adjust this value to move it higher */
    margin-top: -150px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px; 
    margin-top: 36px; 
`;

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    position: relative;
    align-self: flex-start;
    max-width: 440px;
    margin: 0px auto;
`;

export const TelevisionContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 830px; 
    width: 100%;
    margin: 0px auto; 
    position: relative;
    height: auto; 
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const TelevisionFrame = styled.img`
    position: relative;
    width: 100%;
    height: auto;
    z-index: 2;
`;

export const ThumbnailImage = styled.img`
    position: absolute;
    top: 5%; 
    left: 9%;
    width: 83%; 
    height: 70%; 
    object-fit: cover; 
    z-index: 1;
`;

export const VideoContainer = styled.div`
    position: absolute;
    top: 10%; 
    left: 10%;
    width: 80%;
    height: 80%;
    z-index: 1; 
    iframe {
        width: 100%;
        height: 100%;
        object-fit: cover;
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
    padding: 5px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    z-index: 3; 
    font-size: 16px; 
`;

export const GameInfo = styled.div`
    width: 110%;
    padding: 20px;
    text-align: center;
    display: flex; 
    flex-direction: column; 
    gap: 0px; 
    padding-top: 12%; 
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
    background-image: url(${(props) => props.bgImage});  
    background-size: cover;
    background-position: center;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 10px;
    width: 150px;  
    height: 50px;

    &:hover {
        background-size: 110%;  
        background-position: center;
    }
`;

export const Divider = styled.img`
    width: 100%;
    margin: 10px 0;
`;

export const NotesContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
`;

export const NoteImage = styled.img`
    overflow-clip-margin: content-box;
    overflow: clip;
    border: 0;
    font-size: 100%;
    font: inherit;
    margin: 0;
    padding: 0;
    vertical-align: initial;
`;

export const Note1 = styled(NoteImage)`
    position: absolute;
    top: -650px;
    left: 0px;
    transform: translateY(-20%);
    z-index: 8;
    max-width: 146px;
`;

export const Note2 = styled(NoteImage)`
    position: absolute;
    bottom: 730px;
    left: 1200px;
    transform: translateY(100%);
    right: 0px;
    z-index: 8;
    max-width: 129px;
`;

export const Note3 = styled(NoteImage)`
    position: absolute;
    bottom: 50px; 
    transform: translateY(32%) translateX(86%);
    right: 0px;
    z-index: 8;
    max-width: 192px;
`;

export const Note4 = styled(NoteImage)`
    position: absolute;
    bottom: 80px;
    transform: translateY(32%) translateX(86%);
    right: -350px;
    z-index: 8;
    max-width: 192px;
`;

export const TitledSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
`;

export const FlexSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
`;

export const Header = styled.h2`
    margin: 0px;
    font-weight: 300;
    text-transform: uppercase;
    text-align: left;
    font-size: 4.5rem;
    font-weight: 400;
    color: rgb(240, 220, 192);
    font-family: Rowdies, serif;
    line-height: 1.2;
`;

export const Description = styled.p`
    font-size: 16px; 
    color: white; 
    margin: 0; 
`;

export const HeaderInfo = styled.h2`
    margin: 0px;
    font-weight: 300;
    text-transform: uppercase;
    text-align: left;
    font-size: 2.5rem;
    color: rgb(240, 220, 192);
    font-family: 'Rowdies', serif;
    line-height: 1.2; 
`;

export const StyleDescription = styled.p`
    margin: 0px;
    font-family: "Roboto Slab", serif;
    text-align: left;
    font-size: 16px;
    color: rgb(240, 220, 192);
    font-weight: 400;
    line-height: 24px;
`;

export const PlayNowButton = styled.button`
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
    background-image: url(${button2});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    align-items: center;
    justify-content: center;
    user-select: none;
    width: 188px;
    height: 60px;
    font-family: Rowdies, serif;
    font-size: 2.25rem;
    text-transform: none;
    color: rgb(223, 163, 99);
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }
`;

export const WatchTrailerButton = styled.button`
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
    background-image: url(${button});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    align-items: center;
    justify-content: center;
    user-select: none;
    width: 188px;
    height: 60px;
    font-family: Rowdies, serif;
    font-size: 2.25rem;
    text-transform: none;
    color: rgb(223, 163, 99);
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }
`;

