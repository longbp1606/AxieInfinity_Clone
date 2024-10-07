import styled from "styled-components";
import { Button, Drawer, Row } from "antd";
import NavBackground from '../../../assets/nav/nav-drawer-paper.jpg';
import { theme } from "../../../themes";

export const DrawerStyled = styled(Drawer)`
    .ant-drawer-body {
        background-image: url(${NavBackground});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center top;
    }
`;

export const NavBarContainer = styled(Row)`
    & a {
        color: ${theme.colors.textPaper};
        font-weight: 800;
        font-size: 2rem;
        text-transform: uppercase;
    }

    & .ant-space-item {
        color: ${theme.colors.textPaper};
        font-weight: 800;
        font-size: 2rem;
        transition: ${theme.transition.primary};

        & svg {
            color: ${theme.colors.textPaper};
        }
    }
`;

export const ButtonStyled = styled(Button)`
    background: rgba(20, 20, 20, 0.5);
    color: ${theme.colors.textLore};
    font-family: ${theme.fonts.rowdies};
    font-size: 2.5rem;
    font-weight: 500;
    width: 200px;
    height: 48px;
    text-transform: uppercase;
    border-radius: 12px;
    border: none;
    line-height: 1.75;
    transition: transform 0.25s;

    &:hover {
        transform: scale(1.1);
    }
`;