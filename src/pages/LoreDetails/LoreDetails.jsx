import { Button, Carousel, Col, Divider, Flex, Image, Row, Typography } from 'antd';
import * as Styled from './LoreDetails.styled';
import ArrowLeft from '../../assets/icon-component/arrow-left.svg';
import ArrowDown from '../../assets/icon-component/arrow-down.svg';
import { useDocumentTitle } from '../../hooks';
import { TbZoomIn, TbZoomOut } from "react-icons/tb";
import { useEffect, useRef, useState } from 'react';
import { GoScreenFull } from "react-icons/go";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import config from '../../config';

const { Text } = Typography;

const LoreDetails = () => {
    useDocumentTitle('Lore');

    const navigate = useNavigate();

    const [isOpenPagination, setIsOpenPagination] = useState(false);
    const [isZoom, setIsZoom] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [heightPage, setHeightPage] = useState(0);
    const imageRefs = useRef([]);


    const imagePages = Array(21)
        .fill()
        .map((_, index) => `/src/assets/lore/chapter-1/page-${index + 1}.jpg`);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;

            const clientHeight = document.documentElement.clientHeight;

            const scrollTop = document.documentElement.scrollTop;

            const totalPages = Math.floor(scrollHeight / heightPage);
            const currentPage = Math.ceil((scrollTop + clientHeight) / heightPage);

            setPageNumber(currentPage);
            console.log({
                scrollHeight: scrollHeight,
                heightPage: heightPage,
                currentPage: currentPage
            });
        };

        const updateHeight = () => {
            if (imageRefs.current[0]) {
                setHeightPage(imageRefs.current[0].offsetHeight);
            }
        }

        window.addEventListener('scroll', handleScroll);

        window.addEventListener('resize', updateHeight);

        return () => {
            window.removeEventListener('scroll', handleScroll);

            window.removeEventListener('resize', updateHeight);
        }
    }, [heightPage]);

    const scrollToPage = (pageIndex) => {
        if (imageRefs.current[pageIndex]) {
            imageRefs.current[pageIndex].scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleOpenPagination = () => {
        setIsOpenPagination(true);
    }

    const handleClosedPagination = () => {
        setIsOpenPagination(false);
    }

    const handleZoomOut = () => {
        setIsZoom(true);
    }

    const handleZoomIn = () => {
        setIsZoom(false);
    }

    const handleOpenFullScreen = () => {
        setIsFullScreen(true);
        const element = document.documentElement;
        element.requestFullscreen();
    }

    const handClosedFullScreen = () => {
        setIsFullScreen(false);
        document.exitFullscreen();
    }

    return (
        <Styled.StoryWrapper>
            <Styled.StoryContainer
                vertical
                style={{ width: isZoom ? '100%' : '50%' }}
            >
                {imagePages.map((page, index) => (
                    <img
                        src={page}
                        alt={`Image ${index + 1}`}
                        ref={(el) => (imageRefs.current[index] = el)}
                        key={index}
                        onLoad={() => {
                            if (imageRefs.current[0]) {
                                setHeightPage(imageRefs.current[0].offsetHeight);
                            }
                        }}
                    />
                ))}
            </Styled.StoryContainer>

            <Styled.NavigationContainer vertical>
                <Styled.PageListWrapper
                    vertical
                    style={{ transform: isOpenPagination ? 'translateY(0%)' : 'translateY(150%)' }}
                >
                    <Styled.PageListCarousel dots={false} arrows>
                        <Styled.PageListContainer>
                            <Flex>
                                {imagePages.slice(0, 12).map((page, index) => (
                                    <Styled.PageContainer
                                        vertical
                                        key={index}
                                        align='center'
                                    >
                                        <Image
                                            src={page}
                                            alt={`page-${index}`}
                                            preview={false}
                                            width={100}
                                            onClick={() => scrollToPage(index)}
                                        />
                                        <Text>{index + 1}</Text>
                                    </Styled.PageContainer>
                                ))}
                            </Flex>
                        </Styled.PageListContainer>

                        <Styled.PageListContainer>
                            <Flex>
                                {imagePages.slice(9, 21).map((page, index) => (
                                    <Styled.PageContainer
                                        vertical
                                        key={index}
                                        align='center'
                                    >
                                        <Image
                                            src={page}
                                            alt={`page-${index + 10}`}
                                            preview={false}
                                            width={100}
                                            onClick={() => scrollToPage(index + 9)}
                                        />
                                        <Text>{index + 10}</Text>
                                    </Styled.PageContainer>
                                ))}
                            </Flex>
                        </Styled.PageListContainer>
                    </Styled.PageListCarousel>
                </Styled.PageListWrapper>

                <Styled.NavigationBar justify='space-between' align='center'>
                    <Styled.NavigationLeft align='center' gap={60}>
                        <Styled.BackButton
                            type='link'
                            onClick={() => navigate(config.routes.lore)}
                        >
                            <Image src={ArrowLeft} alt='arrow-left' preview={false} />
                            Back to lore
                        </Styled.BackButton>
                        <Text>Issue #1 - The Forgotten Temple</Text>
                    </Styled.NavigationLeft>

                    <Styled.NavigationRight align='center' gap={100}>
                        <Styled.PagePaginationContainer gap={12} align='center'>
                            <Text>Page</Text>

                            {
                                isOpenPagination ?
                                    <Styled.PagePaginationButton
                                        gap={4}
                                        align='center'
                                        justify='space-between'
                                        onClick={handleClosedPagination}
                                    >
                                        <Text>{pageNumber}</Text>
                                        <Image
                                            src={ArrowDown}
                                            alt='arrow-down'
                                            preview={false}
                                            width={24}
                                            height={24}
                                            style={{ transform: 'rotateZ(180deg)' }}
                                        />
                                    </Styled.PagePaginationButton> :
                                    <Styled.PagePaginationButton
                                        gap={4}
                                        align='center'
                                        justify='space-between'
                                        onClick={handleOpenPagination}
                                    >
                                        <Text>{pageNumber}</Text>
                                        <Image
                                            src={ArrowDown}
                                            alt='arrow-down'
                                            preview={false}
                                            width={24}
                                            height={24}
                                            style={{ transform: 'rotateZ(0)' }}
                                        />
                                    </Styled.PagePaginationButton>
                            }

                            <Text>{`of ${imagePages.length}`}</Text>
                        </Styled.PagePaginationContainer>

                        <Styled.ZoomContainer align='center' gap={12}>
                            {isZoom ?
                                <Button onClick={handleZoomIn}>
                                    <TbZoomOut />
                                </Button> :
                                <Button onClick={handleZoomOut}>
                                    <TbZoomIn />
                                </Button>}

                            <Divider type='vertical' />

                            {
                                isFullScreen ?
                                    <Button onClick={handClosedFullScreen}>
                                        <AiOutlineFullscreenExit />
                                    </Button> :
                                    <Button onClick={handleOpenFullScreen}>
                                        <GoScreenFull />
                                    </Button>
                            }
                        </Styled.ZoomContainer>
                    </Styled.NavigationRight>
                </Styled.NavigationBar>
            </Styled.NavigationContainer>
        </Styled.StoryWrapper>
    )
}

export default LoreDetails