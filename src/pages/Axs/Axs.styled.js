import styled from "styled-components";
import HeaderBackground from '../../assets/Background/header-background.jpg';
import PaperBorderURL from '../../assets/Background/paper-border.jpg';
import PaperURL from '../../assets/Background/paper.jpg';
import Axie from '../../assets/Background/axie-illustration.png';
import { theme } from "../../themes";

export const AxsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-height: 400px;
    align-items: center;
    position: relative;
    background-image: url(${HeaderBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding: 182px 30px 60px;
    
    color: ${theme.colors.white};
    text-align: center;
    
    & h1 {    
        font-size: 3rem;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 48px;
    }

    & p {
        max-width: 1080px;
        font-size: 20px;
        display: flex;
        gap: 20px;

        &:nth-child(3) {
            font-weight: 700;
        }

        & a {
            font-size: 24px;
            font-weight: 700;
            color: ${theme.colors.white};
            text-shadow: rgb(35, 99, 221) 0px 2px 20px;
        }
    }
`;

export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PaperBorder = styled.div`
    background-image: url(${PaperBorderURL});
    background-repeat: repeat-x;
    background-position: center top;
    height: 21px;
    width: 100%;
`;

export const PaperContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    background-image: url(${PaperURL});
    background-repeat: repeat;
    background-position: center center;
    background-size: contain;
    min-height: 400px;
    padding: 80px 0;
    width: 100%;
`;

export const AxieIllustration = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${Axie});
    background-repeat: no-repeat;
    background-position: center center;
    height: 192px;
    width: 1400px;
    position: absolute;
    top: 26px;
    left: 50%;
    transform: translateX(-50%);
    mix-blend-mode: luminosity;
    z-index: 1;
    opacity: 0.7;
`;

export const PaperContent = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 3;
    gap: 12px;
    width: 100%;
    max-width: 1280px;
    margin: 0px auto;
    padding: 0px 20px;
    color: ${theme.colors.textPrimary};

    & h1 {
        font-size: 32px;
        line-height: 40px;
        font-weight: 800;
        text-align: center;
    }

    & p {
        font-size: 16px;
        font-weight: 500;
        text-align: center;
    }

    
`;

export const IntroductionSection = styled.div`
    width: 100%;
    text-align: center;

    & .ant-row {
        width: 100%;
        margin: 64px 0;

        & .ant-col {
            & h2.ant-typography {
                color: ${theme.colors.textPrimary};
                margin: 20px 0;
                font-size: 20px;
                font-weight: 800;
            }

            & span.ant-typography {
                color: ${theme.colors.textPrimary};
                font-weight: 500;
            }
        }
    }
`;

export const StakingSection = styled.div`
    width: 100%;
    margin-bottom: 64px;

    & .ant-row {
        & .ant-col {
            display: flex;
            flex-direction: column;
            gap: 20px;

            &:nth-child(1) {
                margin-top: 100px;
            }

            & .ant-typography {
                color: ${theme.colors.textPrimary};
                text-align: left;
            }

            & span.ant-typography {
                font-weight: 600;
                font-size: 15px;
            }

            & .ant-btn {
                width: 200px;
                height: 48px;
                background: rgb(108, 59, 40);
                color: rgb(240, 220, 192);
                font-family: ${theme.fonts.rowdies};
                font-size: 2.5rem;
                border: none;
                border-radius: 12px;
                transition: transform 0.3s;

                &:hover {
                    transform: scale(1.05);
                }
            }
        }
    }
`;

export const DiagramSection = styled.div`
    width: 100%;
    text-align: center;
`;

