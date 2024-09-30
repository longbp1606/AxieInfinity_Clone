import { Typography } from '@mui/material';
import * as Styled from './Lore.styled';
import Cover from '../../assets/lore/cover.jpg';

const Lore = () => {
    return (
        <Styled.LoreBackground>
            <Styled.LoreWrapper>
                <Styled.LoreContainer>
                    <Styled.TextContainer>
                        <Typography variant='body2'>
                            Tales of Lunacia
                        </Typography>

                        <Typography variant='body2'>
                            These stories reveal secrets buried deep within Lunacia's DNA.
                        </Typography>
                    </Styled.TextContainer>

                    <Styled.StoryContainer>
                        <Styled.StoryBorder>
                            <Styled.StoryContent>
                                <Styled.ImageContainer>
                                    <img src={Cover} alt='cover' />
                                    <Styled.GradientOverlay />
                                </Styled.ImageContainer>
                                <Typography variant='body2'>
                                    Issue #1: The Forgotten Temple
                                </Typography>
                            </Styled.StoryContent>
                        </Styled.StoryBorder>
                    </Styled.StoryContainer>
                </Styled.LoreContainer>
            </Styled.LoreWrapper>
        </Styled.LoreBackground>
    )
}

export default Lore;