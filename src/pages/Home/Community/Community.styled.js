import { Button, Flex } from "antd";
import styled, { css } from "styled-components";
import { theme } from "../../../themes";
import Globe from '../../../assets/embrace-infinity/globe.png'
import PhotoURL1 from '../../../assets/community/photo-1.png';
import PhotoURL2 from '../../../assets/community/photo-2.png';
import PhotoURL3 from '../../../assets/community/photo-3.png';
import PhotoURL4 from '../../../assets/community/photo-4.png';
import PhotoURL5 from '../../../assets/community/photo-5.png';
import PhotoURL6 from '../../../assets/community/photo-6.png';

export const CommunityWrapper = styled(Flex)`
    margin-top: -2%;
    position: relative;

    & h1.ant-typography {
        font-weight: 500;
        text-transform: uppercase;
        text-align: center;
        font-size: 6rem;
        color: ${theme.colors.textGalaxy};
        font-family: ${theme.fonts.rowdies};
    }
`;

export const CommunityContainer = styled(Flex)`
    width: 100%;
    max-width: 1440px;
    position: relative;
    margin: 0px auto;
`;

export const CommunityBackground = styled.div`
    display: flex;
    position: relative;
    padding-bottom: 65%;
    width: 112%;
    background-image: url(${Globe});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    min-width: 554px;
`;

//Template
export const AnimationLayer = styled.div`
    animation-duration: 1s;
    opacity: 1;
`;

export const PhotoWrapperTemplate = css`
    position: absolute;
`;

export const PhotoContainerTemplate = css`
    position: relative;
`;

export const PhotoTemplate = css`
    display: flex;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
`;

//Photo-1 styled
export const PhotoWrapper1 = styled(Flex)`
    ${PhotoWrapperTemplate}
    left: 17.2%;
    top: 46.5%;
    width: 9.72%;
`;

export const PhotoContainer1 = styled(Flex)`
    ${PhotoContainerTemplate}
    padding-bottom: 108.075%;
`;

export const Photo1 = styled.div`
    background-image: url(${PhotoURL1});
    ${PhotoTemplate}
`;

//Photo-2 styled
export const PhotoWrapper2 = styled(Flex)`
    ${PhotoWrapperTemplate}
    left: 32.5%;
    top: 37%;
    width: 14.72%;
`;

export const PhotoContainer2 = styled(Flex)`
    ${PhotoContainerTemplate}
    padding-bottom: 105.66%;
`;

export const Photo2 = styled.div`
    background-image: url(${PhotoURL2});
    ${PhotoTemplate}
`;

//Photo-3 styled
export const PhotoWrapper3 = styled(Flex)`
    ${PhotoWrapperTemplate}
    left: 29.5%;
    top: 16.5%;
    width: 9.58%;
`;

export const PhotoContainer3 = styled(Flex)`
    ${PhotoContainerTemplate}
    padding-bottom: 98.55%;
`;

export const Photo3 = styled.div`
    background-image: url(${PhotoURL3});
    ${PhotoTemplate}
`;

//Photo-4 styled
export const PhotoWrapper4 = styled(Flex)`
    ${PhotoWrapperTemplate}
    left: 62%;
    top: 17%;
    width: 4.24%;
`;

export const PhotoContainer4 = styled(Flex)`
    ${PhotoContainerTemplate}
    padding-bottom: 114.75%;
`;

export const Photo4 = styled.div`
    background-image: url(${PhotoURL4});
    ${PhotoTemplate}
`;

//Photo-4 styled
export const PhotoWrapper5 = styled(Flex)`
    ${PhotoWrapperTemplate}
    left: 66.5%;
    top: 24%;
    width: 14.65%;
`;

export const PhotoContainer5 = styled(Flex)`
    ${PhotoContainerTemplate}
    padding-bottom: 68.72%;
`;

export const Photo5 = styled.div`
    background-image: url(${PhotoURL5});
    ${PhotoTemplate}
`;

//Photo-6 styled
export const PhotoWrapper6 = styled(Flex)`
    ${PhotoWrapperTemplate}
    left: 68.5%;
    top: 53%;
    width: 14.24%;
`;

export const PhotoContainer6 = styled(Flex)`
    ${PhotoContainerTemplate}
    padding-bottom: 112.2%;
`;

export const Photo6 = styled.div`
    background-image: url(${PhotoURL6});
    ${PhotoTemplate}
`;

export const SocialWrapper = styled(Flex)`
    position: absolute;
    left: 50%;
    bottom: 30px;
    transform: translateX(-50%);
`;

export const SocialContainer = styled(Flex)`
    width: 360px;
    gap: 36px;

    & span.ant-typography {
        font-size: 2rem;
        text-align: center;
        color: ${theme.colors.textGalaxy};
        font-weight: 400;
    }
`;

export const ButtonContainer = styled(Flex)`
    width: 100%;
`;

export const ButtonTemplate = css`
    font-family: ${theme.fonts.rowdies};
    font-size: 2.5rem;
    font-weight: 500;
    width: 172px;
    height: 48px;
    text-transform: uppercase;
    border-radius: 12px;
    color: ${theme.colors.white};
    transition: transform 0.2;
    padding: 6px 8px;
    border: none;

    &:hover {
        transform: scale(1.05);
    }
`;

export const DiscordButton = styled(Button)`
    ${ButtonTemplate}
    background: ${theme.colors.discord};
`;

export const TwitterButton = styled(Button)`
    ${ButtonTemplate}
    background: ${theme.colors.twitter};
`;



