import React, { useState } from 'react';
import {
    ShowcaseWrapper,
    GameInfo,
    GameTitle,
    GameDescription,
    Button,
    PlayButton,
    NotesContainer,
    NoteImage,
    TelevisionContainer,
    TelevisionFrame,
    ThumbnailImage,
    VideoContainer
} from './Showcase.styled';
import Modal from '../../../component/Modal';

// Correct relative paths based on your folder structure
import playButton from '../../assets/showcase/play-button.png';
import television from '../../assets/showcase/television.png';
import thumbnail from '../../assets/showcase/thumbnail.jpg';
import note1 from '../../assets/showcase/note-1.png';
import note2 from '../../assets/showcase/note-2.png';
import note3 from '../../assets/showcase/note-3.png';

const Showcase = () => {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false); // State for the video modal
    const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false); // State for the trailer modal

    const handlePlayVideo = () => {
        setIsVideoModalOpen(true); // Open the video modal
    };

    const handleWatchTrailer = () => {
        setIsTrailerModalOpen(true); // Open the trailer modal
    };

    const closeVideoModal = () => {
        setIsVideoModalOpen(false); // Close the video modal
    };

    const closeTrailerModal = () => {
        setIsTrailerModalOpen(false); // Close the trailer modal
    };

    return (
        <HomeWrapper>
            {/* Television with thumbnail and play button */}
            <TelevisionContainer>
                <ThumbnailImage src={thumbnail} alt="Game Thumbnail" />
                <PlayButton onClick={handlePlayVideo}>
                    <img src={playButton} alt="Play Button" />
                </PlayButton>
                <TelevisionFrame src={television} alt="Television Frame" />
            </TelevisionContainer>

            {/* Game information section */}
            <GameInfo>
                <GameTitle>AXIE INFINITY ORIGINS</GameTitle>
                <GameDescription>
                    Battle monsters called Chimera or test your skills against other players in The Arena. Climb the leaderboard and become a living legend!
                </GameDescription>
                <div>
                    <Button onClick={() => window.location.href = 'https://welcome.skymavis.com/download/'}>
                        Play now
                    </Button>
                    <Button onClick={handleWatchTrailer}>Watch trailer</Button>
                </div>
            </GameInfo>

            {/* Notes section */}
            <NotesContainer>
                <NoteImage src={note1} alt="Note 1" />
                <NoteImage src={note2} alt="Note 2" />
                <NoteImage src={note3} alt="Note 3" />
            </NotesContainer>

            {/* Modal for the video */}
            <Modal
                isOpen={isVideoModalOpen}
                onClose={closeVideoModal}
                videoSrc="https://www.youtube.com/embed/X2z_YIeettE" // Use the embed link
            />

            {/* Modal for the trailer */}
            <Modal
                isOpen={isTrailerModalOpen}
                onClose={closeTrailerModal}
                videoSrc="https://www.youtube.com/embed/X2z_YIeettE" // Change to the appropriate trailer video link
            />
        </HomeWrapper>
    )
}

export default Showcase