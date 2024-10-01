import styled, { css } from "styled-components";
import { Flex } from 'antd';
import StarsURL from '../../../assets/embrace-infinity/stars.png';
import { theme } from "../../../themes";
import OriginsURL from '../../../assets/embrace-infinity/origins.jpg';
import BreedingURL from '../../../assets/embrace-infinity/breeding.jpg';
import LandURL from '../../../assets/embrace-infinity/land.jpg';
import CreatorURL from '../../../assets/embrace-infinity/creator.jpg';
import BuilderURL from '../../../assets/embrace-infinity/builder.jpg';

export const SectionWrapper = styled(Flex)`
    background: linear-gradient(rgb(56, 37, 50) 0%, rgb(44, 34, 56) 11.88%, rgb(33, 31, 61) 22.15%, rgb(7, 25, 75) 100%);
`;

export const EmbraceInfinitySection = styled(Flex)`
    background-image: url(${StarsURL});
    background-size: cover;
    background-position: center top;
`;

export const EmbraceInfinityWrapper = styled(Flex)`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
`;

export const ConstellationContainer = styled.div`
    right: 60px;
    bottom: 60px;
    position: absolute;
    z-index: 2;
`;

export const EmbraceInfinityContainer = styled(Flex)`
    padding-top: 200px;
    padding-bottom: 50px;
    position: relative;
    z-index: 3;

    & h1.ant-typography {
        text-align: center;
        text-transform: uppercase;
        font-size: 6rem;
        font-weight: 500;
        font-family: ${theme.fonts.rowdies};
        color: ${theme.colors.textGalaxy};
        margin: 0;
    }
`;

export const EmbraceImageArea = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0px auto;
    // transform: translateY(100px);
`;

export const EmbraceImageWrapper = styled(Flex)`
    margin-bottom: 15%;
`;

export const FirstHalfContainer = styled(Flex)`
    transform: translateX(-25%);
`;

export const SecondHalfContainer = styled(Flex)`

`;

export const ElementContainer = styled(Flex)`
    width: 360px;
    margin-bottom: -15%;

    &:nth-of-type(1) {
        align-self: flex-end;
    }

    &:nth-of-type(2) {
        align-self: center;
    }

    &:nth-of-type(3) {
        align-self: flex-start;
    }

    & h3.ant-typography {
        text-align: center;
        font-weight: 400;
        font-size: 4rem;
        text-transform: uppercase;
        color: ${theme.colors.textGalaxy};
        font-family: ${theme.fonts.rowdies};
    }

    & span.ant-typography {
        text-align: center;
        font-size: 16px;
        color: ${theme.colors.textGalaxy};
        font-weight: 400;
    }
`;

export const ElementImageHolder = styled(Flex)`
    width: 100%;
    border-radius: 50%;
    margin-bottom: 20px;
    padding-bottom: 100%;
    position: relative;
`;

export const ElementImageTemplete = css`
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border: 4px solid rgb(74, 87, 122);
    transition: 0.2s;
`;

export const OrginsImage = styled.div`
    background-image: url(${OriginsURL});
    ${ElementImageTemplete}
`;

export const BreedingImage = styled.div`
    background-image: url(${BreedingURL});
    ${ElementImageTemplete}
`;

export const LandImage = styled.div`
    background-image: url(${LandURL});
    ${ElementImageTemplete}
`;

export const CreatorImage = styled.div`
    background-image: url(${CreatorURL});
    ${ElementImageTemplete}
`;

export const BuilderImage = styled.div`
    background-image: url(${BuilderURL});
    ${ElementImageTemplete}
`;


