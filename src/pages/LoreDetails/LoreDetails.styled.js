import styled from "styled-components";
import ChapterBackground from '../../assets/lore/chapter-background.jpg';
import { Button, Carousel, Flex } from "antd";
import { theme } from "../../themes";

export const StoryWrapper = styled.div`
    background-image: url(${ChapterBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    padding-bottom: 80px;
`;

export const StoryContainer = styled(Flex)`
    width: 50%;
    height: auto;
    margin: auto;
    transition: width 0.2s;
`;

export const PageHolder = styled.div`
    width: 100%;
    height: auto;
`;

export const NavigationContainer = styled(Flex)`
    position: fixed;
    bottom: 0px;
    width: 100%;
`;

export const PageListWrapper = styled(Flex)`
    background: rgba(20, 20, 20, 0.8);
    backdrop-filter: blur(6px);
    padding: 16px 0px;
    transition: transform 0.3s ease-out;
`;

export const PageListContainer = styled.div`
    width: 100%;
`;

export const PageListCarousel = styled(Carousel)`
    & .slick-slide {
        display: flex
    }
`;

export const PageContainer = styled(Flex)`
    width: 100%;

    & .ant-image {
        cursor: pointer;
    }

    & span.ant-typography {
        color: ${theme.colors.white};
        text-align: center;
        margin-top: 10px;
    }
`;

export const NavigationBar = styled(Flex)`
    background: rgba(20, 20, 20, 0.8);
    backdrop-filter: blur(6px);
    padding: 16px 80px;
    border-top: 1px solid rgb(78, 79, 91);

    & span.ant-typography {
        font-size: 2rem;
        font-weight: 400;
        color: ${theme.colors.textLore};
    }
`;

export const NavigationLeft = styled(Flex)`
    & span.ant-typography {
        text-transform: uppercase;
    }
`;

export const BackButton = styled(Button)`
    font-size: 2rem;
    font-weight: 500;
    text-transform: uppercase;
    color: ${theme.colors.textLore};
    transition: transform 0.25s;

    & .ant-btn-variant-link:not(:disabled):not(.ant-btn-disabled):hover {
        color: none;
    }

    &:hover {
        transform: scale(1.1);
    }
`;

export const NavigationRight = styled(Flex)``;

export const PagePaginationContainer = styled(Flex)``;

export const PagePaginationButton = styled(Flex)`
    cursor: pointer;
    border-radius: 32px;
    border: 1px solid rgb(78, 79, 81);
    padding: 8px 12px;

    & span.ant-typography {
        min-width: 40px;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        color: ${theme.colors.white};
    }
`;

export const ZoomContainer = styled(Flex)`
    & .ant-btn-variant-outlined {
        background: transparent;
        border: none;

        &:not(:disabled):not(.ant-btn-disabled) {
            &:hover {
                background: rgba(240, 220, 192, 0.2);
                color: transparent;
                border: none;
            }

            &:active {
                background: rgba(240, 220, 192, 0.2);
                border: none;
                color: transparent;
            }
        }

        &:focus-visible {
            outline: none;
            background: rgba(240, 220, 192, 0.2);
            outline-offset: 0px;
            transition: none;
        }
    }

    & svg {
        font-size: 24px;
        color: ${theme.colors.textLore};
    }

    & .ant-divider-vertical {
        border-inline-start: 1px solid rgb(78, 79, 91);
        width: 2px;
        height: 30px;
    }
`;

