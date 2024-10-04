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
    min-height: 400px;
    align-items: center;
    position: relative;
    background-image: url(${HeaderBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding: 182px 30px 60px;
    
    
    
    & h1 {    
        color: ${theme.colors.white};
        text-align: center;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 48px;
        line-height: 1.16667;
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
    max-width: 1084px;
    margin: 0px auto;
    padding: 0px 20px;
    color: ${theme.colors.textPrimary};


    & p {
      margin-left: 28px;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
    }
    & h2 {
      margin-top: 28px;
      font-size: 20px;
      line-height: 28px;
      font-weight: 800;
    }

    & h3 {
      margin-top: 8px;
      font-size: 16px;
      line-height: 28px;
      font-weight: 800;
    }

    & a{
      color:rgb(17, 92, 185)
    }

    
`;


