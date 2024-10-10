import { useState, useRef, useEffect, createRef } from "react";
import * as Styled from './Marketplace.styled';
import { AnalysticData, CharactersData, FlagContentData } from "./Marketplace.data";
import { Link } from "react-router-dom";
import StandURL from '../../../assets/stand/stand.png';
import { Flex, Image, Typography } from "antd";
import FlagHeaderURL from '../../../assets/backgroud/flag-header.png';
import GemURL from '../../../assets/play-collect-own/icons/gem.png';
import { theme } from "../../../themes";
import { useInView } from "react-intersection-observer";
import { WoodDividerDark } from "../Home.styled";
import PlayImage from '../../../assets/play-collect-own/play.jpg';
import CollectImage from '../../../assets/play-collect-own/collect.jpg';
import OwnImage from '../../../assets/play-collect-own/own.jpg';

const { Title, Text } = Typography;

const Marketplace = () => {
  const [isViewOn, setIsViewOn] = useState(false);
  const [currentAxie, setCurrentAxie] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const [iconRef, setIconInView] = useState([]);

  useEffect(() => {
    setIconInView((prevRefs) =>
      Array(AnalysticData.length)
        .fill()
        .map((_, i) => prevRefs[i] || createRef())
    );
  }, [AnalysticData.length])

  const goToSlide = (slideIndex) => {
    carouselRef.current.goTo(slideIndex);
  }

  const images = [ PlayImage, CollectImage, OwnImage ];

  const onChange = (currentSlide) => {
    setCurrentSlide(currentSlide);
  }

  const handleChangeSlide = (currentSlide) => {
    setCurrentSlide(currentSlide);
    goToSlide(currentSlide);
  };

  const handleVisitClick = () => {
    window.open("https://app.axieinfinity.com/marketplace/axies/", "_blank");
  };
  const handleCharacterClick = (url) => {
    window.open(url, "_blank");
  };

  const CharacterContainer = (key, imageURL, price) => {
    return (
      <Link to={`https://app.axieinfinity.com/marketplace/axies/${key}`} key={key}>
        <Styled.CharacterContainer vertical>
          <Styled.CharacterHolder vertical>
            <Styled.AxieImage src={imageURL} alt="character" />
          </Styled.CharacterHolder>

          <Styled.InformationHolder
            justify="space-between"
            align="center"
            onMouseEnter={() => {
              setIsViewOn(true);
              setCurrentAxie(key);
            }}
            onMouseLeave={() => {
              setIsViewOn(false);
              setCurrentAxie('');
            }}
          >
            <Text
              style={{
                display: isViewOn && currentAxie === key ? 'none' : 'inline-block'
              }}
            >
              #{key}
            </Text>

            <Text
              style={{
                display: isViewOn && currentAxie === key ? 'none' : 'inline-block'
              }}
            >
              ${price}
            </Text>

            <Text
              style={{
                display: isViewOn && currentAxie === key ? 'inline-block' : 'none'
              }}
            >
              View on marketplace
            </Text>
          </Styled.InformationHolder>

          <Styled.StandHolder>
            <Image src={StandURL} alt="Stand" preview={false} />
          </Styled.StandHolder>
        </Styled.CharacterContainer>
      </Link>
    )
  }

  return (
    <>
      <Styled.StyledBackgroud6>
        <WoodDividerDark />

        <Styled.MarketplaceWrapper vertical gap={24}>
          <Styled.MarketplaceTableWrapper vertical>
            <Styled.MarketplaceTableContainer>
              <Styled.StyledMaketTable>
                <h2>Marketplace</h2>
                <p>
                  Trade or sell your axies with anyone, anywhere.
                  You own your axies just like a physical
                  trading card or figurine.
                </p>
                <Styled.ButtonVisit onClick={handleVisitClick}>Visit</Styled.ButtonVisit>
              </Styled.StyledMaketTable>
            </Styled.MarketplaceTableContainer>
          </Styled.MarketplaceTableWrapper>
        </Styled.MarketplaceWrapper>

        <Styled.CharactersWrapper lg={24} md={0} sm={0} xs={0}>
          <Styled.CharactersLayout justify="center" vertical>
            <Flex justify="center">
              {CharactersData.slice(0, 3).map((character) => (
                CharacterContainer(character.key, character.imageURL, character.price)
              ))}
            </Flex>
            <Flex justify="center">
              {CharactersData.slice(3, 7).map((character) => (
                CharacterContainer(character.key, character.imageURL, character.price)
              ))}
            </Flex>
            <Flex justify="center">
              {CharactersData.slice(7, 9).map((character) => (
                CharacterContainer(character.key, character.imageURL, character.price)
              ))}
            </Flex>
            <Flex justify="center">
              {CharactersData.slice(9, 12).map((character) => (
                CharacterContainer(character.key, character.imageURL, character.price)
              ))}
            </Flex>
          </Styled.CharactersLayout>
        </Styled.CharactersWrapper>

        <Styled.CharactersWrapper xxl={0} xl={0} lg={0} md={24}>
          <Flex justify="center" wrap gap={20}>
            {CharactersData.map((character) => (
              CharacterContainer(character.key, character.imageURL, character.price)
            ))}
          </Flex>
        </Styled.CharactersWrapper>

        <Styled.FlagWrapper vertical>
          <Flex vertical>
            <Image src={FlagHeaderURL} alt="flag-header" preview={false} />
          </Flex>

          <Styled.FlagBodyWrapper vertical>
            <Styled.FlagCarousel
              dots={false}
              arrows
              afterChange={onChange}
              ref={carouselRef}
              autoplay
            >
              {images.map((image, index) => (
                <Image
                  src={image}
                  alt={`image-${index}`}
                  preview={false}
                  key={index}
                />
              ))}
            </Styled.FlagCarousel>

            <Styled.FlagBodyContainer vertical align="center">
              <Styled.PlayCollectOwnContainer align="center">
                <Text
                  onClick={() => handleChangeSlide(0)}
                  style={{ color: currentSlide === 0 ? 'white' : `${theme.colors.textForWoodBackground}` }}
                >
                  Play
                </Text>

                <Image src={GemURL} alt="gem" preview={false} />

                <Text
                  onClick={() => handleChangeSlide(1)}
                  style={{ color: currentSlide === 1 ? 'white' : `${theme.colors.textForWoodBackground}` }}
                >
                  Collect
                </Text>

                <Image src={GemURL} alt="gem" preview={false} />

                <Text
                  onClick={() => handleChangeSlide(2)}
                  style={{ color: currentSlide === 2 ? 'white' : `${theme.colors.textForWoodBackground}` }}
                >
                  Own
                </Text>
              </Styled.PlayCollectOwnContainer>

              <Styled.DescriptionContainer>
                <Text>
                  {FlagContentData.find((item) => currentSlide === item.id)?.content}
                </Text>
              </Styled.DescriptionContainer>

              <Styled.AnalysticContainer>
                {AnalysticData.map((data) => {
                  const { ref, inView } = useInView({threshold: 0});
                  
                  return (
                    <Styled.AnalysticElement
                      key={data.key}
                      vertical
                      align="center"
                      ref={ref}
                      className={`animate__animated ${inView ? `animate__bounceIn` : ""}`}
                      style={{
                        animationDuration: "1s",
                        opacity: inView ? "1" : "0",
                      }}
                    >
                      <Image src={data.icon} alt={data.key} preview={false} />
                      <Title level={5}>{data.data}</Title>
                      <Text>{data.label}</Text>
                    </Styled.AnalysticElement>
                  )
                })}
              </Styled.AnalysticContainer>
            </Styled.FlagBodyContainer>


          </Styled.FlagBodyWrapper>
        </Styled.FlagWrapper>

      </Styled.StyledBackgroud6>
    </>
  );
}

export default Marketplace;
