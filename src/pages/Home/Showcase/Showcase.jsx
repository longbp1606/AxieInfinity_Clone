import React, { useState } from 'react';
import {
    GameInfo,
    GameDescription,
    PlayButton,
    NotesContainer,
    NoteImage,
    TelevisionContainer,
    TelevisionFrame,
    ThumbnailImage,
    VideoContainer
} from './Showcase.styled';
import Modal from '../../../component/Modal';
import playButton from '../../../assets/showcase/play-button.png';
import television from '../../../assets/showcase/television.png';
import thumbnail from '../../../assets/showcase/thumbnail.jpg';
import Logo from '../../../assets/logo/axie-infinity-origins-logo.png';
import note1 from '../../../assets/showcase/note-1.png';
import note2 from '../../../assets/showcase/note-2.png';
import note3 from '../../../assets/showcase/note-3.png';
import note4 from '../../../assets/showcase/note-4.png';
import { useInView } from 'react-intersection-observer';
import * as Styled from './Showcase.styled';
import LastestNews from "../LastestNews";
import { Image, Typography } from 'antd';

const { Title, Text } = Typography;

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



    // Latest News Function 
    const [ref1, inView1] = useInView({ threshold: 0.1 });
    const [ref2, inView2] = useInView({ threshold: 0.1 });
    const [ref3, inView3] = useInView({ threshold: 0.1 });

    return (
        <div>
            <Styled.ShowcaseWoodenBackground>

                <Styled.ShowcaseWrapper>
                    <Styled.ShowcaseContainer>
                        <Styled.NoteImage src={note1} alt="Note 1" />
                        <Styled.NoteImage2 src={note2} alt='Note 2' />

                        <Styled.ShowcaseGrid>
                            {/* Television with thumbnail and play button */}
                            <Styled.TelevisionWrapper vertical>
                                <TelevisionContainer>
                                    <Styled.NoteImage3 src={note3} alt='Note 3' />
                                    <TelevisionFrame src={television} alt="Television Frame" />
                                    <Styled.ScreenContainer vertical>
                                        <Styled.ThumbnailContainer>
                                            <ThumbnailImage src={thumbnail} alt="Game Thumbnail" />
                                        </Styled.ThumbnailContainer>
                                        <PlayButton onClick={handlePlayVideo}>
                                            <img src={playButton} alt="Play Button" />
                                        </PlayButton>
                                    </Styled.ScreenContainer>
                                </TelevisionContainer>
                            </Styled.TelevisionWrapper>

                            {/* Game information section */}
                            <GameInfo vertical>
                                <Styled.GameLogoContainer vertical>
                                    <Image src={Logo} alt="Logo Game" preview={false} />
                                </Styled.GameLogoContainer>

                                <Styled.GameIntroduction vertical>
                                    <Title level={2}>More than a game</Title>
                                    <Text>
                                        Battle monsters called Chimera or test your skills
                                        against other players in The Arena. Climb the
                                        leaderboard and become a living legend!
                                    </Text>
                                </Styled.GameIntroduction>

                                <Styled.ButtonContainer>
                                    <Styled.PlayNowButton onClick={() => window.location.href = 'https://welcome.skymavis.com/download/'}>
                                        Play now
                                    </Styled.PlayNowButton>
                                    <Styled.WatchTrailerButton onClick={handleWatchTrailer}>
                                        Watch trailer
                                    </Styled.WatchTrailerButton>
                                </Styled.ButtonContainer>

                                <Styled.NoteImage4 src={note4} alt="Note 4" />
                            </GameInfo>
                        </Styled.ShowcaseGrid>
                    </Styled.ShowcaseContainer>
                </Styled.ShowcaseWrapper>

                {/* Notes section */}
                <NotesContainer>
                    <NoteImage src={note1} alt="Note 1" />
                    {/* <NoteImage src={note2} alt="Note 2" />
                    <NoteImage src={note3} alt="Note 3" /> */}
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




                {/* Latest News Section */}
                <Styled.LatestNewsContainer>
                    <Styled.LatestNewsWrapper>
                        <h2 className="MuiTypography-root MuiTypography-h2 title">Latest News</h2>
                        <Styled.NewsContainer>

                            {/* News 1 */}
                            <Styled.NewsWrapper
                                ref={ref1}
                                className={`animate__animated ${inView1 ? 'animate__fadeInUp' : ''
                                    }`}
                                style={{
                                    animationDuration: '0.4s',
                                    opacity: inView1 ? '1' : '0',
                                }}
                            >
                                <a href="https://blog.axieinfinity.com/p/axiepals" target="_blank" rel="noopener noreferrer">
                                    <Styled.News1Container>
                                        <Styled.News1Wrapper>
                                            <Styled.News1Img />
                                            <Styled.News1Content>
                                                <p>Welcome to Lunacia, Axie Pals!</p>
                                                <p>26 Sep, 2024</p>
                                            </Styled.News1Content>
                                        </Styled.News1Wrapper>
                                    </Styled.News1Container>
                                </a>
                            </Styled.NewsWrapper>

                            {/* News 2 */}
                            <Styled.NewsWrapper
                                ref={ref2}
                                className={`animate__animated ${inView2 ? 'animate__fadeInUp' : ''
                                    }`}
                                style={{
                                    animationDuration: '0.4s',
                                    opacity: inView2 ? '1' : '0',
                                }}
                            >
                                <a href="https://blog.axieinfinity.com/p/origins-s10-mystic-era-is-live" target="_blank" rel="noopener noreferrer">
                                    <Styled.News2Container>
                                        <Styled.News2Wrapper>
                                            <Styled.News2Img />
                                            <Styled.News2Content>
                                                <p>Origins S10 Mystic Era is Live!</p>
                                                <p>26 Sep, 2024</p>
                                            </Styled.News2Content>
                                        </Styled.News2Wrapper>
                                    </Styled.News2Container>
                                </a>
                            </Styled.NewsWrapper>

                            {/* News 3 */}
                            <Styled.NewsWrapper
                                ref={ref3}
                                className={`animate__animated ${inView3 ? 'animate__fadeInUp' : ''
                                    }`}
                                style={{
                                    animationDuration: '0.4s',
                                    opacity: inView3 ? '1' : '0',
                                }}
                            >
                                <a href="https://blog.axieinfinity.com/p/axie-infinity-september-town-hall" target="_blank" rel="noopener noreferrer">
                                    <Styled.News3Container>
                                        <Styled.News3Wrapper>
                                            <Styled.News3Img />
                                            <Styled.News3Content>
                                                <p>Axie Infinity September Town Hall Recap</p>
                                                <p>20 Sep, 2024</p>
                                            </Styled.News3Content>
                                        </Styled.News3Wrapper>
                                    </Styled.News3Container>
                                </a>
                            </Styled.NewsWrapper>

                        </Styled.NewsContainer>
                    </Styled.LatestNewsWrapper>
                </Styled.LatestNewsContainer>

                <LastestNews></LastestNews>
                {/* End Latest News Section */}

            </Styled.ShowcaseWoodenBackground>
        </div>
    );
};

export default Showcase;
