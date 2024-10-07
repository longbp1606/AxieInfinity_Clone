import styled from "styled-components";
import Background from '../../assets/templates/home/wood-background-dark.jpg';
import Board from '../../assets/templates/404/board.png';
import Button from '../../assets/marketplace/button-dark.png';
import { theme } from "../../themes";

export const NotFoundWrapper = styled.div`
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding-top: 184px;
    padding-bottom: 100px;
`;

export const NotFoundContainer = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0px auto;
`;

export const ContentWrapper = styled.div`
    max-width: 880px;
    width: 100%;
    margin: 0px auto;
    aspect-ratio: 880/457;
    background-image: url(${Board});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;

    & h1 {
        margin: 0px;
        font-weight: 500;
        text-transform: uppercase;
        text-align: left;
        font-size: 8em;
        color: ${theme.colors.textForWoodBackground};
        font-family: Rowdies, serif;
        line-height: 124px;
    }
`;

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;

    & a {
        & button {
            background-image: url(${Button});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            width: 224px;
            height: 60px;
            font-family: Rowdies, serif;
            font-size: 2.5rem;
            font-weight: 500;
            color: ${theme.colors.textForWoodBackground};
            transition: transform 0.2s;
            text-transform: none;

            &:hover {
                transform: scale(1.05);
                cursor: pointer;
            }
        }
    }
`;

export const InformationContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    max-width: 460px;

    & p.MuiTypography-body2 {
        color: ${theme.colors.textForWoodBackground};
        text-align: center;
        
        line-height: 24px;
        font-family: "Roboto Slab", serif;

        &:nth-child(1) {
            font-size: 32px;
            font-weight: 700;
        }

        &:nth-child(2) {
            font-size: 2rem;
            font-weight: 400;
            transition: ${theme.transition.primary};

            & a {
                color: ${theme.colors.textForWoodBackground};
                text-decoration: underline;

                &:hover {
                    text-decoration: none;
                }
            }
        }
    }
`;





