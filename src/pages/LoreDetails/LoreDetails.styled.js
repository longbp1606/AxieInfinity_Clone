import styled from "styled-components";
import ChapterBackground from '../../assets/lore/chapter-background.jpg';
import { Button, Carousel, Flex } from "antd";
import { theme } from "../../themes";
import LeftArrow from '../../assets/icon/arrow-left.png';
import RightArrow from '../../assets/icon/arrow-right.png';

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

    ${({ theme }) => theme.breakpoints.down('lg')} {
        width: 100%;
        padding: 0px 16px;
    }
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

export const MobilePageListWrapper = styled(Flex)`
    background: rgba(20, 20, 20, 0.8);
    backdrop-filter: blur(6px);
    padding: 20px;
    transition: transform 0.3s ease-out;
    position: fixed;
    top: 0px;
    bottom: 0px;
    overflow: auto;
    padding-bottom: 50px;
    gap: 20px;
`;

export const MobilePageListTitle = styled(Flex)`
    width: 100%;

    & h3.ant-typography {
        color: white;
    }

    & svg {
        color: white;
        font-size: 30px;
    }
`;

export const PageListCarousel = styled(Carousel)`
    & .slick-slide {
        display: flex
    }

    .slick-prev,
    .slick-next {
        width: 40px;
        height: 66px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        opacity: 0.5;

        &::after {
            width: 0px;
            height: 0px;
            border: none;
        }

        ${({theme}) => theme.breakpoints.down('lg')} {
            width: 20px;
            height: 33px;
        }
    }

    .slick-prev {
        background-image: url(${LeftArrow});
    }

    .slick-next {
        background-image: url(${RightArrow});
    }
`;

export const PageContainer = styled(Flex)`
    width: 100%;

    & .ant-image {
        cursor: pointer;
        width: 100%;
    }

    & span.ant-typography {
        color: ${theme.colors.white};
        text-align: center;
        margin-top: 10px;
    }

    ${({ theme }) => theme.breakpoints.down('xl')} {
        width: 50%;

        & .ant-image {
            cursor: pointer;
            width: 100%;
        }
    }

    ${({ theme }) => theme.breakpoints.down('lg')} {
        width: 48%;
        gap: 10px;

        & .ant-image {
            width: 100%;
        }

        & span.ant-typography {
            text-align: center;
            margin-top: 0px;
            margin-bottom: 10px;
            font-size: 16px;
        }
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

    ${({ theme }) => theme.breakpoints.down('xl')} {
        padding: 16px 40px;
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
        padding: 16px 10px;
    }
`;

export const NavigationLeft = styled(Flex)`
    gap: 60px;

    & span.ant-typography {
        text-transform: uppercase;
        font-weight: 600;
    }

    ${({ theme }) => theme.breakpoints.down('xl')} {
        gap: 10px;
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
        & span.ant-typography {
            font-size: 15px;
        }
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

    ${({ theme }) => theme.breakpoints.down('xl')} {
        padding: 0;
    }
`;

export const NavigationRight = styled(Flex)`
    gap: 40px;

    ${({ theme }) => theme.breakpoints.down('xl')} {
        gap: 40px;
    }
`;

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

    ${({ theme }) => theme.breakpoints.down('lg')} {
        border: none;

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

