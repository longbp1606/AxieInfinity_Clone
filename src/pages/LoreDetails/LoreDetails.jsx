import { Button, Carousel, Col, Divider, Flex, Image, Row, Typography } from 'antd';
import * as Styled from './LoreDetails.styled';
import ArrowLeft from '../../assets/icon-component/arrow-left.svg';
import ArrowDown from '../../assets/icon-component/arrow-down.svg';
import { useDocumentTitle } from '../../hooks';
import { TbZoomIn, TbZoomOut } from "react-icons/tb";
import { useEffect, useState } from 'react';
import { GoScreenFull } from "react-icons/go";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import config from '../../config';

const { Text } = Typography;

const LoreDetails = () => {
    useDocumentTitle('Lore');

    const navigate = useNavigate();

    const [isZoom, setIsZoom] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);

    const imagePages = Array(21)
        .fill()
        .map((_, index) => `/src/assets/lore/chapter-1/page-${index + 1}.jpg`);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;

            const clientHeight = 1000;

            const scrollTop = document.documentElement.scrollTop;

            const totalPages = Math.ceil(scrollHeight / clientHeight);
            const currentPage = Math.ceil((scrollTop + clientHeight) / clientHeight);

            setPageNumber(currentPage);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

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
                    <Image
                        key={index}
                        src={page}
                        alt={`Image ${index + 1}`}
                        preview={false}
                    />
                ))}
            </Styled.StoryContainer>

            <Styled.NavigationContainer vertical>
                <Styled.PageListWrapper vertical>
                    <Styled.PageListContainer gap={12}>
                        {imagePages.map((page, index) => (
                            <Styled.PageContainer vertical key={index}>
                                <Image
                                    src={page}
                                    alt={`page-${index}`}
                                    preview={false}
                                    width={100}
                                />
                                <Text>{index + 1}</Text>
                            </Styled.PageContainer>
                        ))}
                    </Styled.PageListContainer>

                    {/* <Styled.PageListCarousel dots={false}>
                        <Styled.PageListContainer style={{ display: 'flex'}}>
                            {imagePages.slice(0,2).map((page, index) => (
                                <Styled.PageContainer vertical key={index}>
                                    <Image
                                        src={page}
                                        alt={`page-${index}`}
                                        preview={false}
                                        width={100}
                                    />
                                    <Text>{index + 1}</Text>
                                </Styled.PageContainer>
                            ))}
                        </Styled.PageListContainer>
                    </Styled.PageListCarousel> */}
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

                            <Styled.PagePaginationButton
                                gap={4}
                                align='center'
                                justify='space-between'
                            >
                                <Text>{pageNumber}</Text>
                                <Image
                                    src={ArrowDown}
                                    alt='arrow-down'
                                    preview={false}
                                    width={24}
                                    height={24}
                                />
                            </Styled.PagePaginationButton>

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