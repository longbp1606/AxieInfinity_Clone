import styled from "styled-components";
import { theme } from "../../themes";

export const FloatButtonWrapper = styled.div`
    display: flex;
    background: ${theme.colors.discord};
    color: ${theme.colors.white};
    border-radius: 8px;
    padding: 8px 16px;
    position: fixed;
    bottom: 16px;
    right: 16px;
    gap: 8px;
    align-items: center;
    transition: ${theme.transition.primary};
    z-index: 99;

    &:hover {
        transform: scale(1.08);
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
        right: 0;
        border-radius: 8px 0px 0px 8px;
        padding: 6px 12px;
    }
`;

export const DiscordLogo = styled.img``;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    & p {
        line-height: 1.5;
        font-size: 2rem;
        font-weight: 400;
    }

    & h2 {
        font-family: Rowdies, serif;
        font-size: 17px;
        text-transform: uppercase;
        line-height: 1.2;
    }
`;