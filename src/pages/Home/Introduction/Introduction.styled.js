import { Flex } from "antd";
import styled, { css } from "styled-components";
import { theme } from "../../../themes";
import Background5 from '../../../assets/backgroud/background-5.jpg';
import PlayButtonLarge from '../../../assets/button/play-now-large.png';
import PlayButtonSmall from '../../../assets/button/play-now-small.png';
import PaperBackground from '../../../assets/table/table_1.png';
import CardList from '../../../assets/card/card.jpg';

export const IntroductionWrapper = styled(Flex)`
    background: ${theme.colors.textPrimary};
`;

export const MainScreenWrapper = styled(Flex)`
    width: 100%;
    position: relative;
    margin: 0px auto;
`;

export const MainScreenContainer = styled(Flex)`
    background-image: url(${Background5});
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    aspect-ratio: 1444/1195;
    position: relative;
    min-width: 1011px;
    width: 100%;
    min-height: 839px;
`;

export const BackgroundContainerTemplate = css`
    width: 100%;
    position: absolute;
    left: 0px;
    bottom: 0px;

    & .ant-image {
        display: flex;
        flex-direction: column;
    }
`;

export const BackgroundContainer1 = styled.div`
    ${BackgroundContainerTemplate}
    transform: translateY(${(props) => props.scrolly * -0.5}px);
`;

export const BackgroundContainer2 = styled.div`
    ${BackgroundContainerTemplate}
    padding-top: 20%;

    & a {
        & .ant-image {
            position: absolute;
            left: 49%;
            transform: translateX(-50%);
            pointer-events: auto;
            width: 280px;
            bottom: 58.1%;
        }
    }

    & .ant-btn {
        position: absolute;
        bottom: 41%;
        left: 48.3%;
        transform: translateX(-50%);
        pointer-events: auto;
        background: none;
    
        background-image: url(${PlayButtonLarge});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        border: none;

        width: 240px;
        height: 80px;

        font-family: ${theme.fonts.rowdies};
        font-size: 3.5rem;
        text-transform: uppercase;
        color: ${theme.colors.textNavigation};
        transition: transform 0.2s;
        
        &.ant-btn-variant-outlined:not(:disabled):not(.ant-btn-disabled):hover {
            transform: scale(1.1) translateX(-47%);
            background-image: url(${PlayButtonLarge});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            background-color: transparent;
            color: ${theme.colors.textNavigation};
        }
    }

    ${({ theme }) => theme.breakpoints.down('xxl')} {
        & a {
            & .ant-image {
                width: 240px;
            }
        }
    }

    ${({ theme }) => theme.breakpoints.down('xl')} {
        & a {
            & .ant-image {
                width: 160px;
            }
        }

        & .ant-btn {
            background-image: url(${PlayButtonSmall});

            width: 180px;
            height: 60px;

            font-size: 2.5rem;

            &.ant-btn-variant-outlined:not(:disabled):not(.ant-btn-disabled):hover {
                background-image: url(${PlayButtonSmall});
            }
        }
    }
`;

export const BackgroundContainer3 = styled.div`
    ${BackgroundContainerTemplate}
    pointer-events: none;
    transform: translateY(${(props) => props.scrolly * -0.5}px);
`;

export const FeatureWrapper = styled(Flex)`
    width: 100%;
    margin: -5% auto 30px;
`;

export const FeatureContainer = styled(Flex)`
    width: 100%;
    max-width: 1280px;
    margin: 0px auto;

    ${({theme}) => theme.breakpoints.down('xl')} {
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const FeatureHolder = styled(Flex)`
    position: relative;
    width: 385px;
    aspect-ratio: 385 / 432;
    margin-bottom: 100px;
    max-width: 100%;
`;

export const FeatureBackground = styled(Flex)`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

    background-image: url(${PaperBackground});
    background-size: cover;
    backgorund-repeat: no-repeat;
    background-position: center center;

    padding-bottom: 112%;
    z-index: 3;
`;

export const FeatureContent = styled(Flex)`
    gap: 20px;
    padding: 11% 8%;

    & .ant-flex {
        min-height: 80px;
    }

    & h2.ant-typography {
        color: ${theme.colors.textPaper};
        font-family: ${theme.fonts.rowdies};
        text-transform: uppercase;
        font-weight: 500;
        margin: 0;
        text-align: center;
        font-size: 4rem;
    }

    & span.ant-typography {
        color: ${theme.colors.textPaper};
        font-weight: 500;
        font-size: 2rem;
        text-align: center;
    }
`;

export const AxieImageContainer = styled.div`
    position: absolute;
    bottom: -23%;
    z-index: 4;
    // transform: translateY(-50%);
    text-align: center;
    width: 104%;
    aspect-ratio: 400 / 300;
`;

export const CardWrapper = styled(Flex)`
    width: 100%;
    max-width: 1575px;
    position: relative;
    margin: 0px auto;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding-bottom: 19.4%;
    width: 111%;

    background-image: url(${CardList});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
`;
