import { Carousel, Col, Flex, Image } from "antd";
import styled from "styled-components";
import { theme } from "../../../themes";
import BoardMobile from '../../../assets/templates/home/board-mobile.png';
import LeftArrow from '../../../assets/play-collect-own/icons/left-arrow.png';
import RightArrow from '../../../assets/play-collect-own/icons/right-arrow.png';
import Background6 from '../../../assets/backgroud/background-6.jpg';
import Board from '../../../assets/table/MarketTable_1.png';
import ButtonBG from '../../../assets/button/button_2.png';

export const StyledBackgroud6 = styled.div`
  background-image: url(${Background6}); 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-bottom: 80px;
`;

export const MarketplaceWrapper = styled(Flex)``;

export const MarketplaceTableWrapper = styled(Flex)`
    max-width: 880px;
    width: 100%;
    margin: 0 auto;
`;

export const MarketplaceTableContainer = styled(Flex)`
    position: relative;
    padding-bottom: 36%;

    ${({theme}) => theme.breakpoints.down('lg')} {
        padding-bottom: 77%;
    }
`;

export const StyledMaketTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url(${Board});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10%;
  
  h2 {
    color: rgb(223, 163, 99);
    font-size: 250%;
    
    text-align: center;
    font-family: Rowdies, serif;
    text-transform: uppercase;
  }
  
  p {
    color: rgb(223, 163, 99);
    font-size: 16px;
    text-align: center;
    font-family: "Roboto Slab", serif;
    font-weight: normal;
    padding-bottom: 15px;
  }

  ${({theme}) => theme.breakpoints.down('lg')} {
    background-image: url(${BoardMobile});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const ButtonVisit = styled.button`
  background-image: url(${ButtonBG});
  color: rgb(223, 163, 99);
  border: none;
  border-radius: 15px;
  padding: 15px 30px;
  cursor: pointer;
  position: relative;
  width: 224px;
  height: 60px;
  align-items: center;
  font-size: 20px;
  font-family: Rowdies, serif;
  background-color: transparent;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const CharactersWrapper = styled(Col)`
    width: 100%;
    max-width: 1280px;
    margin: 0px auto;
`;

export const CharactersLayout = styled(Flex)``;

export const CharacterContainer = styled(Flex)`
    width: 255px;
    min-height: 233px;
    position: relative;
    justify-content: flex-end;
    margin: 10px 20px;
`;

export const CharacterHolder = styled(Flex)`
    position: relative;
    padding-bottom: 77%;
    margin-bottom: -17%;
    z-index: 2;

    .ant-image-img {
        width: 130%;
        height: 130%;
    }
`;

export const AxieImage = styled(Image)`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-48%) translateY(-9%);
    min-height: 256px;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.3) translateX(-35%) translateY(-9%);
    }
`;

export const InformationHolder = styled(Flex)`
    position: absolute;
    bottom: 2.5%;
    left: 50%;
    transform: translateX(-50%);
    width: 75%;
    padding: 0px 5%;
    color: rgb(58, 30, 16);
    z-index: 2;

    & span.ant-typography:nth-child(1) {
        font-size: 2rem;
        color: ${theme.colors.textPrimary};
        font-weight: 400;
    }

    & span.ant-typography:nth-child(2) {
        font-size: 2.75rem;
        color: ${theme.colors.textPrimary};
        font-weight: 800;
    }

    & span.ant-typography:nth-child(3) {
        display: none;
        font-size: 2rem;
        color: ${theme.colors.textPrimary};
        font-weight: 400;
        text-align: center;
        transform: translateY(-25%);
    }
`;

export const StandHolder = styled(Flex)``;

export const FlagWrapper = styled(Flex)`
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 0px auto;
`;

export const FlagBodyWrapper = styled(Flex)`
    background: linear-gradient(rgb(103, 19, 19) 0%, rgb(128, 31, 26) 100%);
    width: 93.3333%;
    margin: 0px auto;
    border-radius: 0px 0px 60px 60px;
    padding: 22px 4% 48px;
`;

export const FlagBodyContainer = styled(Flex)`
    width: 100%;
`;

export const FlagCarousel = styled(Carousel)`
    border: 1px solid ${theme.colors.textForWoodBackground};
    border-radius: 32px;
    width: 100%;
    max-width: 1024px;
    aspect-ratio: 1024/511;
    overflow: hidden;
    margin-bottom: 4%;

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
        left: 2%;
    }

    .slick-next {
        background-image: url(${RightArrow});
        right: 2%;
    }
`;

export const PlayCollectOwnContainer = styled(Flex)`
    gap: 40px;
    margin-bottom: 2.5%;    

    & span.ant-typography {
        font-family: ${theme.fonts.rowdies};
        color: ${theme.colors.textForWoodBackground};
        font-size: 6rem;
        font-weight: 800;
        transition: ${theme.transition.primary};
        cursor: pointer;

        &:hover {
            color: ${theme.colors.white};
        }
    }

    ${({theme}) => theme.breakpoints.down('lg')} {
        gap: 20px;    

        & span.ant-typography {
            font-size: 3rem;
        }
    }

    ${({theme}) => theme.breakpoints.down('sm')} { 
        & span.ant-typography {
            font-size: 2.75rem;
        }
    }
`;

export const DescriptionContainer = styled.div`
    max-width: 720px;
    width: 100%;
    margin: 0 auto 5%;    
    text-align: center;

    & span.ant-typography {
        color: ${theme.colors.textForWoodBackground};
        font-weight: 600;
        font-size: 2rem;
    }

    ${({theme}) => theme.breakpoints.down('lg')} {
        & span.ant-typography {
            font-size: 2rem;
        }
    }

    ${({theme}) => theme.breakpoints.down('sm')} {
        & span.ant-typography {
            font-size: 1.75rem;
        }
    }
`;

export const AnalysticContainer = styled(Flex)`
    gap: 20px;

    ${({theme}) => theme.breakpoints.down('lg')} {
        flex-direction: column;
    }
`;

export const AnalysticElement = styled(Flex)`
    width: 240px;

    & .ant-image {
        width: 80px;
        margin-bottom: 15px;
        transition: ${theme.transition.primary};

        &:hover {
            transform: translateY(-15%);
        }
    }

    & h5.ant-typography {
        color: ${theme.colors.textForWoodBackground};
        font-size: 4rem;
        font-weight: 800;
    }

    & span.ant-typography {
        color: ${theme.colors.textForWoodBackground};
        font-size: 2rem;
        font-weight: 500;
    }

    ${({theme}) => theme.breakpoints.down('lg')} {
        & h5.ant-typography {
            font-size: 3rem;
        }

        & span.ant-typography {
            font-size: 1.75rem;
        }
    }
`;

export const StyledFlag = styled.div`
  background-image: url('./src/assets/backgroud/flag-header.png');
  background-size: contain;
  top:32%;
  width: 80%;
  background-repeat: no-repeat;
  background-position: center;
  height: 20vh;
  color: white;
  position: relative;
`;
export const SlytedBackgroudFlag = styled.div`
  background: linear-gradient(rgb(103, 19, 19) 0%, rgb(128, 31, 26) 100%);
  background-size: contain;
  top:90%;
  width: 93.35%;
  background-repeat: no-repeat;
  background-position: center;
  height: 122vh;
  color: white;
  border-radius: 0 0 60px 60px;
  position: relative;
  left:40px;
`;
export const SlytedImagePlayConllectOwn = styled.div`
  background-image: url(${(props) => props.image});
  background-size: contain; /* Giữ tỉ lệ ảnh mà không bị cắt */
  background-repeat: no-repeat;
  margin-left:80px;
  margin-top:5px;
  width: 85%;
  height: 66.1vh;
  border-radius: 30px;
  transition: background-image 0.5s ease-in-out;
  position: relative;
  border: 1px solid rgba(223, 163, 99, 0.8); /* Màu sắc và độ trong suốt */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;
export const SlytedButtonLeft = styled.button`
  background-image: url('./src/assets/play-collect-own/icons/left-arrow.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 40px;
  height: 70px;
  position: absolute;
  left: 10px;
  top: 50%;
  border: none;
  outline: none;
  transform: translateY(-50%);
  opacity: 0.8;
  cursor: pointer;
  z-index: 2;
  background-color: transparent;
`;
export const SlytedButtonRight = styled.button`
  background-image: url('./src/assets/play-collect-own/icons/right-arrow.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 40px;
  height: 70px;
  position: absolute;
  right: 10px;
  top: 50%;
  border: none;
  outline: none; 
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
  background-color: transparent;
`;
export const SlytedButtonPlay = styled.button`
  background-color: transparent;
  color: ${({ active }) => (active ? 'white' : 'rgb(223, 163, 99)')};
  border: none;
  margin-top: 30px;
  margin-left: 150px;
  border-radius: 20px;
  padding: 15px 0px;
  font-size: 45px;
  font-family: Rowdies, serif;
  &:hover{
    color: white;
  }
`;

export const SlytedButtonCollect = styled.button`
  background-color: transparent;
  color: ${({ active }) => (active ? 'white' : 'rgb(223, 163, 99)')};
  border: none;
  border-radius: 20px;
  padding: 15px 30px;
  font-size: 45px;
  margin-right:40px;
  font-family: Rowdies, serif;
  &:hover{
    color: white;
  }
`;

export const SlytedButtonOwn = styled.button`
  background-color: transparent;
  color: ${({ active }) => (active ? 'white' : 'rgb(223, 163, 99)')};
  border: none;
  border-radius: 20px;
  padding: 15px 30px;
  font-size: 45px;
  font-family: Rowdies, serif;
  &:hover{
    color: white;
  }
`;
export const SlytedIconGem = styled.div`
  background-image: url('./src/assets/play-collect-own/icons/gem.png');
  width:100%;
  height:10vh;
  margin-top:-35px;
  margin-left:250px;
  background-repeat: no-repeat;
`;
export const StyledHeading = styled.h1`
  /* Thay đổi các thuộc tính CSS ở đây */
  font-size: 14px; /* Kích thước chữ */
  color: rgb(223, 163, 99); /* Màu sắc chữ */
  text-align: center; /* Canh giữa chữ */
  margin-top: -30px;
  padding:0 250px;
`;

export const StyledIconsContainer = styled.div`
  position: absolute;
  top: 75%; 
  left: 65%;
  transform: translateX(-50%);
  display: flex;
  gap:20%;
  align-items: center; 
  width: 100%;
  z-index: 1;
`;

export const StyledImageIcons = styled.button`
  background: none;
  border: none;
  margin-top: 20px;
  text-align: center;
  color: rgb(223, 163, 99);

  img.icons {
    
    height: auto;
    transition: transform 0.1s ease-in-out;

    &:hover {
    transform: scale(1.2);
  }
  }
  
  .h2 {
    margin-top: 10px;
    font-size: 24px;
  }
  .h1 {
    font-family: "Roboto Slab", serif;
  }
`;