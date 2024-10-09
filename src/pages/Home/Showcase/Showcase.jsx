import React, { useState } from 'react';
import {
    ShowcaseWrapper, GameInfo, NotesContainer, Note1, Note2, Note3, Note4,
    TelevisionContainer, TelevisionFrame, ThumbnailImage, WatchTrailerButton, LogoContainer, BodyContainer, ButtonContainer,
    PlayButton, TitledSection, Header, StyleDescription, PlayNowButton
} from './Showcase.styled';

import Modal from '../../../component/Modal';
import playButton from '../../../assets/showcase/play-button.png';
import television from '../../../assets/showcase/television.png';
import thumbnail from '../../../assets/showcase/thumbnail.jpg';
import note1 from '../../../assets/showcase/note-1.png';
import note2 from '../../../assets/showcase/note-2.png';
import note3 from '../../../assets/showcase/note-3.png';
import note4 from '../../../assets/showcase/note-4.png';
import background4 from '../../../assets/backgroud/background-4.jpg';
import button from '../../../assets/button/button.png';
import button2 from '../../../assets/button/button_2.png';
import axielogo from '../../../assets/logo/axie-infinity-logo.png';

const Showcase = () => {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);

    const handlePlayVideo = () => setIsVideoModalOpen(true);
    const handleWatchTrailer = () => setIsTrailerModalOpen(true);
    const closeVideoModal = () => setIsVideoModalOpen(false);
    const closeTrailerModal = () => setIsTrailerModalOpen(false);

    return (
        <ShowcaseWrapper>
            <TelevisionContainer>
                <ThumbnailImage src={thumbnail} alt="Game Thumbnail" />
                <PlayButton onClick={handlePlayVideo}>
                    <img src={playButton} alt="Play Button" />
                </PlayButton>
                <TelevisionFrame src={television} alt="Television Frame" />
            </TelevisionContainer>

            <GameInfo>
                <LogoContainer>
                    <img src={axielogo} alt="Axie Infinity Logo" style={{ width: '230px' }} />
                </LogoContainer>
                <BodyContainer>
                    <TitledSection>
                        <Header>More Than A Game</Header>
                    </TitledSection>
                    <StyleDescription>
                        Battle monsters called Chimera or test your skills against other players in The Arena. Climb the leaderboard and become a living legend!
                    </StyleDescription>
                    <div>
                        <ButtonContainer>
                            
                            <PlayNowButton onClick={() => window.location.href = 'https://welcome.skymavis.com/download/'}>
                                Play now
                            </PlayNowButton>
                            <WatchTrailerButton onClick={handleWatchTrailer}>
                                Watch trailer
                            </WatchTrailerButton>
                         
                        </ButtonContainer>
                    </div>
                </BodyContainer>
            </GameInfo>

            <NotesContainer>
                <Note1 src={note1} alt="Note 1" />
                <Note2 src={note2} alt="Note 2" />
                <Note3 src={note3} alt="Note 3" />
                <Note4 src={note4} alt="Note 4" />
            </NotesContainer>

            <Modal isOpen={isVideoModalOpen} onClose={closeVideoModal} videoSrc="https://www.youtube.com/embed/X2z_YIeettE" />
            <Modal isOpen={isTrailerModalOpen} onClose={closeTrailerModal} videoSrc="https://www.youtube.com/embed/X2z_YIeettE" />
        </ShowcaseWrapper>
    );
}

export default Showcase;
