import styled from 'styled-components';
import Background from '../../assets/lore/background.jpg';
import { theme } from '../../themes';

export const LoreBackground = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`;

export const LoreWrapper = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0px auto;
    height: 100%;

    ${({theme}) => theme.breakpoints.down('xl')} {
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const LoreContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 80px;
    padding-bottom: 80px;
    margin-top: 250px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    
    & p.MuiTypography-body2 {
        color: ${theme.colors.textLore};

        &:nth-child(1) {
            font-size: 5rem;
            font-weight: 500;
            font-family: Rowdies, serif;
            line-height: 1.2;
        }

        &:nth-child(2) {
            font-family: "Roboto Slab", serif;
            font-size: 2rem;
            line-height: 1.2;
            font-weight: 500;
        }
    }
`;

export const StoryContainer = styled.div`
    display: flex;
    gap: 16px;
`;

export const StoryBorder = styled.div`
    display: flex;
    height: 100%;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 8px;
    overflow: hidden;

    &:hover {
        border: 1px solid ${theme.colors.textLore}
    }
`;

export const StoryContent = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    & p.MuiTypography-body2 {
        line-height: 1.5;
        font-family: "Roboto Slab", serif;
        font-size: 2.5rem;
        color: ${theme.colors.textLore};
        font-weight: 600;
        position: absolute;
        bottom: 20px;
        left: 20px;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    height: auto;
    width: 300px;
    
    & img {
        width: 100%;
    }

    ${({theme}) => theme.breakpoints.down('sm')} {
        width: 100%
    }
`;

export const GradientOverlay = styled.div`
    display: flex;
    background: linear-gradient(0deg, rgba(12, 10, 9, 0.8) 0%, rgba(12, 10, 9, 0) 100%);
    width: 100%;
    height: 100%;
    position: absolute;
`;