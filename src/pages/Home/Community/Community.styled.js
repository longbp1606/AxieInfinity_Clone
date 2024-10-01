import { Flex } from "antd";
import styled from "styled-components";
import { theme } from "../../../themes";
import Globe from '../../../assets/embrace-infinity/globe.png'
import PhotoURL1 from '../../../assets/community/photo-1.png';

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

export const PhotoWrapper1 = styled(Flex)`
    position: absolute;
    left: 17.2%;
    top: 46.5%;
    width: 9.72%;
`;

export const AnimationLayer = styled.div`
    animation-duration: 1s;
    opacity: 1;
`;

export const PhotoContainer1 = styled(Flex)`
    position: relative;
    padding-bottom: 108.075%;
`;

export const Photo1 = styled.div`
    display: flex;
    background-image: url(${PhotoURL1});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
`;



