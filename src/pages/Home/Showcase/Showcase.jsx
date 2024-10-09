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
import { useInView } from 'react-intersection-observer';
import * as Styled from './Showcase.styled';
import LastestNews from "../LastestNews";

const Showcase = () => {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);

    const handlePlayVideo = () => setIsVideoModalOpen(true);
    const handleWatchTrailer = () => setIsTrailerModalOpen(true);
    const closeVideoModal = () => setIsVideoModalOpen(false);
    const closeTrailerModal = () => setIsTrailerModalOpen(false);

    // Latest News Function 
    const [ref1, inView1] = useInView({ threshold: 0.1 });
    const [ref2, inView2] = useInView({ threshold: 0.1 });
    const [ref3, inView3] = useInView({ threshold: 0.1 });

    return (
        <div>
            <Styled.ShowcaseWoodenBackground>

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
            <Styled.ShowcaseMarketDivider></Styled.ShowcaseMarketDivider>
        </div>
    );
};

export default Showcase;
