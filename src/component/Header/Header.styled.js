import styled from "styled-components";
import NavImage from '../../assets/nav/nav.png';
import { theme } from "../../themes";
import { AppBar } from "@mui/material";
import NavMobile from '../../assets/nav/nav-mobile.png';

export const AppBarStyled = styled(AppBar)`
    z-index: 100;
`;

export const NavbarWrapper = styled.div`
    display: flex;
    transition: 0.3s;
    background-image: url(${NavImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: fixed;
    top: 2vh;
    left: 50%;
    transform: translateX(-50%);
    width: 1280px;
    height: 80px;
    z-index: 99;
    padding: 30px 30px 38px;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;

    & a {
        & button {
            width: 200px;
            height: 48px;
            background: rgba(20, 20, 20, 0.5);
            font-family: Rowdies, serif;
            font-weight: 500;           
            font-size: 1.4em;
            text-transform: uppercase;
            color: ${theme.colors.textNavigation};
            border-radius: 12px;
            transition: transform 0.2s;

            &:hover {
                transform: scale(1.05);
            }
        }
    }

    ${({ theme }) => theme.breakpoints.down('xs')} {
        background-image: url(${NavMobile});
        background-size: contain;
        width: 320px;
        height: 64px;
        padding: 30px 30px 38px 10px;
    }
`;

export const NavbarContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 24px;

    ${({ theme }) => theme.breakpoints.down('md')} {
        justify-content: space-between;
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
        justify-content: space-between;
    }

    ${({ theme }) => theme.breakpoints.down('xs')} {
        justify-content: space-between;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    width: 110px;

    ${({ theme }) => theme.breakpoints.down('xs')} {
        width: 85px;
    }
`;

export const NavbarList = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;

    & a {
        font-weight: 700;
        font-size: 2rem;
        color: ${theme.colors.textLore};
        transition: all linear 0.25s;
        padding: 10px;

        &:hover {
            color: rgb(255,255,255);
        }
    }
`;

export const MoreContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 2rem;
    color: ${theme.colors.textLore};
    transition: all linear 0.25s;
    padding: 20px 0px;
    text-transform: uppercase;
    gap: 6px;

    & img {
        width: 20px;
        transition: transform 0.25s cubic-bezier(0.4, 0, 0, 1.02);
    }

    &:hover {
        color: rgb(255,255,255);
        
        & img {
            transform: rotate(180deg);
        }

        & div {
            display: flex;

            &:hover {
                display: flex;
            }
        }
    }
`;

export const DropdownContainer = styled.div`
    display: none;
    flex-direction: column;
    background: rgb(199, 100, 61);
    box-shadow: rgb(114, 64, 81) 0px 8px;
    position: absolute;
    border-radius: 0px 0px 16px 16px;
    z-index: 2;
    top: 85%;
    left: 63%;
    padding: 16px 24px;
    gap: 8px;

    & a {
        padding: 10px 0;
    }
`;

export const DropDownItem = styled.div`
    
`;