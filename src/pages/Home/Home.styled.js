import { css, styled } from 'styled-components';
import WoodDividerLightURL from '../../assets/templates/home/wood-divider-light.png';
import WoodDividerDarkURL from '../../assets/templates/home/wood-divider-dark.png';

export const WoodDivider = css`
    display: flex;
    position: relative;
    background-repeat: repeat-x;
    backgorund-size: cover;
    background-position: center center;
    width: 100%;
`;

export const WoodDividerLight = styled.div`
    ${WoodDivider}
    background-image: url(${WoodDividerLightURL});
    position: relative;
    height: 36px;
    z-index: 2;
    margin-top: -18px;
`;

export const WoodDividerDark = styled.div`
    ${WoodDivider}
    background-image: url(${WoodDividerDarkURL});
    height: 56px;
`;

