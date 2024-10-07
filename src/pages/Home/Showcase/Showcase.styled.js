import styled from "styled-components";

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