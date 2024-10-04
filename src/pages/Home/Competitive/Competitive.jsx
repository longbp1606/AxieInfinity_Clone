import React, { useState, useEffect } from 'react';
import * as Styled from './Competitive.styled';
import CompetitiveWoodenSign from '../../../assets/competitive/wooden-sign.png';
import CompetitiveThumbnail from '../../../assets/competitive/thumbnail.jpg';
import CompetitiveFrame from '../../../assets/competitive/frame.png';
import CompetitivePlayButton from '../../../assets/competitive/play-button.png';

const Competitive = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen]);

    return (
        <div>
            <Styled.DividerCompetitiveContainer>
            </Styled.DividerCompetitiveContainer>
            <Styled.CompetitiveContainer>
                <Styled.Background0Container>
                    <Styled.Background0Wrapper>
                        <Styled.Background1Container>
                        </Styled.Background1Container>
                        <Styled.Background2Container>
                            <Styled.Background2Wrapper>
                            </Styled.Background2Wrapper>
                            <Styled.WoodenSignContainer>
                                <h2 class="MuiTypography-root MuiTypography-h2 title">Competitive Axie</h2>
                                <Styled.WoodenSignWrapper>
                                    <img src={CompetitiveWoodenSign} alt="Wooden Sign"></img>
                                </Styled.WoodenSignWrapper>
                            </Styled.WoodenSignContainer>
                        </Styled.Background2Container>
                    </Styled.Background0Wrapper>
                </Styled.Background0Container>

                <Styled.EnterTheArenaContainer>
                    <Styled.EnterTheArenaWrapper>
                        <Styled.EnterTheArenaContent>
                            <Styled.EnterTheArenaContentVideo onClick={openModal}>
                                <Styled.EnterTheArenaContentVideoThumbnail>
                                    <img src={CompetitiveThumbnail} alt="Esports final at AxieCon"></img>
                                </Styled.EnterTheArenaContentVideoThumbnail>
                                <Styled.EnterTheArenaContentVideoFrame>
                                    <img src={CompetitiveFrame} alt="Television"></img>
                                </Styled.EnterTheArenaContentVideoFrame>
                                <Styled.EnterTheArenaContentVideoButton>
                                    <img src={CompetitivePlayButton} alt="Play Button"></img>
                                </Styled.EnterTheArenaContentVideoButton>
                            </Styled.EnterTheArenaContentVideo>
                            <Styled.EnterTheArenaContentText>
                                <Styled.EnterTheArenaContentTitle>
                                    <h2 class="MuiTypography-root MuiTypography-h2 header">Enter the Arena</h2>
                                    <p class="MuiTypography-root MuiTypography-body2">Climb the ladder in ranked arena battles and join tournaments for eternal glory and legendary rewards!</p>
                                </Styled.EnterTheArenaContentTitle>
                                <Styled.EnterTheArenaContentButton>
                                    <span class="link">
                                        <button onClick={openModal} class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary 
                    MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-text 
                    Primary MuiButton-sizeMedium MuiButton-textSizeMedium button" tabindex="0" type="button">
                                            Watch finals
                                            <span class="MuiTouchRipple-root button2"></span>
                                        </button>
                                    </span>
                                </Styled.EnterTheArenaContentButton>
                            </Styled.EnterTheArenaContentText>
                        </Styled.EnterTheArenaContent>
                    </Styled.EnterTheArenaWrapper>
                </Styled.EnterTheArenaContainer>

                {/* Video */}
                {isModalOpen && (
                    <Styled.VideoModal>
                        <Styled.ModalOverlay onClick={closeModal} />
                        <Styled.ModalContent>
                            <Styled.CloseButton onClick={closeModal}></Styled.CloseButton>
                            <iframe
                                width="100%"
                                height="100%"
                                // src="https://www.youtube.com/embed/kT4EiNyDEm0?si=RUsd5vyUmPPXINe1&amp;start=2344&autoplay=1"
                                src="https://www.youtube.com/embed/q-1-P0ispZ0?si=pt0Z_xMiYdZGGn_u&autoplay=1"
                                title="Axie Origin BYOD Semifinals - Grand Final"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </Styled.ModalContent>
                    </Styled.VideoModal>
                )}

            </Styled.CompetitiveContainer>
        </div>
    )
}

export default Competitive;