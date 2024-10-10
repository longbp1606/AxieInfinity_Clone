import { useState, useEffect, useRef, createRef } from "react";
import * as Styled from './Introduction.styled';
import { Button, Flex, Image, Typography } from "antd";
import Background1 from '../../../assets/backgroud/background-1.png';
import Background2 from '../../../assets/backgroud/background-2.png';
import Background3 from '../../../assets/backgroud/background-3.png';
import Logo from '../../../assets/logo/axie-infinity-logo.png';
import { Link } from "react-router-dom";
import { AxiesData } from "./Introduction.data";
import { useInView } from "react-intersection-observer";

const { Title, Text } = Typography;

const Introduction = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleStates, setVisibleStates] = useState([false, false, false, false]);
  const [imageRef, setImageInView] = useState([]);
  const elementRefs = useRef([]);
  const handleStartClick = () => {
    window.open("https://app.axieinfinity.com/marketplace/axies/", "_blank");
    console.log("Button clicked");
  };

  useEffect(() => {
    setImageInView((prevRefs) =>
      Array(AxiesData.length)
        .fill()
        .map((_, i) => prevRefs[i] || createRef())
    );
  }, [AxiesData.length])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      elementRefs.current.forEach((el, index) => {
        if (el && el.getBoundingClientRect().top < window.innerHeight) {
          setVisibleStates((prevVisibleStates) =>
            prevVisibleStates.map((state, i) => (i === index ? true : state))
          );
        }
      });
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Styled.IntroductionWrapper vertical>
        <Styled.MainScreenWrapper vertical align="center">
          <Styled.MainScreenContainer vertical>
            <Styled.BackgroundContainer1 scrolly={scrollY}>
              <Image src={Background1} alt="image-1" preview={false} />
            </Styled.BackgroundContainer1>

            <Styled.BackgroundContainer2>
              <Image src={Background2} alt="image-2" preview={false} />

              <Link>
                <Image src={Logo} alt="logo" preview={false} />
              </Link>

              <Button>Play now</Button>
            </Styled.BackgroundContainer2>

            <Styled.BackgroundContainer3 scrolly={scrollY}>
              <Image src={Background3} alt="image-2" preview={false} />
            </Styled.BackgroundContainer3>
          </Styled.MainScreenContainer>
        </Styled.MainScreenWrapper>


        <Styled.FeatureWrapper vertical>
          <Styled.FeatureContainer vertical>
            <Flex gap={60} wrap justify="center">
              {AxiesData.map((axie) => {
                const { ref, inView } = useInView({ threshold: 0 });

                return (
                  <Styled.FeatureHolder vertical key={axie.key}>
                    <Styled.FeatureBackground vertical align="center">
                      <Styled.FeatureContent vertical align="center">
                        <Flex align="center">
                          <Title level={2}>{axie.title}</Title>
                        </Flex>

                        <Text>{axie.content}</Text>
                      </Styled.FeatureContent>

                      <Styled.AxieImageContainer
                        ref={ref}
                        className={`
                          animate__animated ${inView ? `animate__bounceIn` : ''}
                          `}
                        style={{
                          animationDuration: "1s",
                          opacity: inView ? "1" : "0",
                        }}
                      >
                        <Image src={axie.image} alt={axie.key} preview={false} />
                      </Styled.AxieImageContainer>
                    </Styled.FeatureBackground>
                  </Styled.FeatureHolder>
                )
              })}
            </Flex>
          </Styled.FeatureContainer>
        </Styled.FeatureWrapper>


        <Styled.CardWrapper vertical align="center">
          <Styled.CardContainer />
        </Styled.CardWrapper>
      </Styled.IntroductionWrapper>

      {/* <Styled.StyledBackgroud1>
        <Styled.StyledBackgroud2>
          <Styled.StyledBackground3>
            <Styled.StyledButtonStart onClick={handleStartClick}>
              PLAY NOW
            </Styled.StyledButtonStart>
            <Styled.StyledBackground4 scrollY={scrollY}>
              <Styled.StyledLogo />
            </Styled.StyledBackground4>
          </Styled.StyledBackground3>
        </Styled.StyledBackgroud2>
      </Styled.StyledBackgroud1> */}
    </>
  );
};

export default Introduction;
