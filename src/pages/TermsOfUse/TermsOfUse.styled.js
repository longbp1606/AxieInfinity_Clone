import styled from "styled-components";
import HeaderBackground from '../../assets/Background/header-background.jpg';
import PaperBorder from '../../assets/Background/paper-border.jpg';
import Paper from '../../assets/Background/paper.jpg';
import Axie from '../../assets/Background/axie-illustration.png';


export const TOSWrapper = styled.div`
    display: flex;
    flex-direction: column;

    & strong{
    font-weight: 800;
    }

    & p {
    font-size: 16px;
    line-height: 24px;
    }
`;

export const TOSHeader = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 400px;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    background-image: url(${HeaderBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding: 182px 30px 60px;

    & h1{
    margin: 0px;
    text-transform: uppercase;
    text-align: center;
    font-size: 6rem;
    color: rgb(255, 255, 255);
    font-weight: 700;
    font-family: "Roboto Slab", serif;
    line-height: 1.16667;
    }
`;

export const TOSBorder = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    background-image: url(${PaperBorder});
    background-repeat: repeat-x;
    background-position: center top;
    height: 21px;
    width: 100%;
`;

export const TOSContainer = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    background-image: url(${Paper});
    background-repeat: repeat;
    background-position: center center;
    background-size: contain;
    min-height: 400px;
    padding-top: 80px;
    padding-bottom: 80px;
    width: 100%;
`;

export const TOSAxie = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
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

export const TOSContent = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 3;
    gap: 12px;
    width: 100%;
    max-width: 1084px;
    margin: 0px auto;
    padding: 0px 20px;

    & p{
    margin-left: 28px;
    }

    & ol{
    list-style-type: decimal;
    padding-inline-start: 40px;
    }

    & ol li ol{
    list-style-type: lower-alpha;
    padding-inline-start: 40px;
    }

    & ol li ol li ol{
    list-style-type: lower-roman;
    padding-inline-start: 40px;
    }

    & ol li ol li::marker{
    font-size: 16px;
    line-height: 28px;
    font-weight: 580;
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
    color: rgb(58, 30, 16);
    }

    & ol li ol li{
    font-size: 16px;
    line-height: 24px;
    color: rgb(58, 30, 16);
    font-weight: 580;
    }

    & ol li:not(:last-child){
    margin-bottom: 12px;
    }

    & ol li::marker{
    font-size: 20px;
    line-height: 28px;
    font-weight: 800;
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
    color: rgb(58, 30, 16);
    }

    & ol li h2{
    font-size: 20px;
    line-height: 28px;
    font-weight: 800;
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
    margin-bottom: 12px;
    margin-top: 28px;
    color: rgb(58, 30, 16);
    }

    & ol li p{
    margin-left: 28px;
    font-size: 16px;
    line-height: 24px;
    color: rgb(58, 30, 16);
    font-weight: 580;
    }

    & ol li p a{
    color: rgb(17, 92, 185);
    text-decoration: none;
    }

    & ol li ol li a{
    color: rgb(17, 92, 185);
    text-decoration: none;
    }

    `;
