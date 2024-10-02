import { Typography } from '@mui/material';
import * as Styled from './Lore.styled';
import Cover from '../../assets/lore/cover.jpg';
import { useDocumentTitle } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

const Lore = () => {
    useDocumentTitle('Lore');    
    const navigate = useNavigate();

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
                        <Styled.StoryBorder 
                            onClick={() => navigate(config.routes.loreDetail.replace(':id','1'))}
                        >
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