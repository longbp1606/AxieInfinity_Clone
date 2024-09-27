import styled from "styled-components";
import { theme } from "../../themes";

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.footer};
    padding: 64px 16px;
    align-items: center;
    gap: 48px;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const Logo = styled.img`
    width: 160px;
`;

export const NavContainer = styled.div`
    display: flex;
    flex-flow: wrap;
    gap: 40px;
    align-items: center;

    & a {
        color: ${theme.colors.textNavigation};
        text-transform: uppercase;
        font-weight: 800;
        font-size: 2rem;
        transition: ${theme.transition.primary};

        &:hover {
            color: ${theme.colors.white};
        }
    }
`;