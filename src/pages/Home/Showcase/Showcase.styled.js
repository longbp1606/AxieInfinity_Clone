import styled from 'styled-components';
import background4 from '../../../assets/backgroud/background-4.jpg';
import button from '../../../assets/button/button.png';
import button2 from '../../../assets/button/button_2.png';

export const ShowcaseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${background4});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    position: relative;
`;

export const TelevisionContainer = styled.div`
    position: relative;
    width: 80%;
    max-width: 700px;
    margin-bottom: 20px;
`;

export const ThumbnailImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
`;

export const PlayButton = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    border: none;
    cursor: pointer;

    img {
        width: 80px;
        height: 80px;
    }
`;

export const TelevisionFrame = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

export const GameInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    margin-bottom: 20px;
`;

export const LogoContainer = styled.div`
    margin-bottom: 40px; /* Adjusted for the logo position */
    display: flex;
    justify-content: center;
`;

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TitledSection = styled.div`
    margin-bottom: 20px;
`;

export const Header = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const StyleDescription = styled.p`
    font-size: 1.2rem;
    color: #ddd;
    max-width: 600px;
    margin-bottom: 30px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const PlayNowButton = styled.button`
    padding: 14px 24px;  /* Increased size */
    font-size: 1.4rem;  /* Increased font size */
    color: white;
    background-image: url(${button2});
    background-size: cover;
    background-position: center;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        transform: scale(1.05);
        transition: 0.3s;
    }
`;

export const WatchTrailerButton = styled.button`
    padding: 14px 24px;  /* Increased size */
    font-size: 1.4rem;  /* Increased font size */
    color: white;
    background-image: url(${button});
    background-size: cover;
    background-position: center;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        transform: scale(1.05);
        transition: 0.3s;
    }
`;

export const NotesContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
`;

export const NoteImage = styled.img`
    max-width: 100px;
`;

export const Note1 = styled(NoteImage)`
    position: absolute;
    top: 10%;  /* Adjusted position */
    left: 0px;
    z-index: 8;
    max-width: 146px;
`;

export const Note2 = styled(NoteImage)`
    position: absolute;
    top: 0px;
    right: 50%;
    transform: translateX(50%);
    z-index: 8;
    max-width: 146px;
`;

export const Note3 = styled(NoteImage)`
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 8;
    max-width: 146px;
`;
