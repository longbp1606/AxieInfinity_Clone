import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const StyledBackgroud1 = styled.div`
  background-image: url('./src/assets/backgroud/background-5.jpg');
  background-size: cover;
  width: 100%;
  background-position: center;
  height: 180vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  
`;

const StyledBackgroud2 = styled.div`
  background-image: url('./src/assets/backgroud/background-1.png');
  background-size: cover;
  width: 110%;
  height: 180vh;
  margin: 0%;
`;

const StyledBackground3 = styled.div`
  background-image: url('./src/assets/backgroud/background-2.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  margin-top: -3%;
  height: 188vh;
`;

const StyledBackground4 = styled.div`
  background-image: url('./src/assets/backgroud/background-3.png');
  background-size: cover;
  width: 100%;
  margin-top: -3%;
  height: 200vh;
  transform: translateY(${(props) => props.scrollY * -0.5}px);
`;

const StyledLogo = styled.div`
  background-image: url('./src/assets/logo/logo.png');
  background-size: contain;
  width: 225px;
  height: 200px;
  background-repeat: no-repeat;
  position: absolute; 
  left: 49%;
  transform: translateX(-50%);
  margin-top: 11%;
`;

const StyledButtonStart = styled.button`
  background-image: url('./src/assets/button/button_start.png');
  color: rgb(240, 220, 192);
  border: none;
  border-radius: 5px;
  padding: 20px 20px;
  cursor: pointer;
  position: relative;
  top: 50%;
  margin-left: 42%;
  width: 180px;
  font-size: 20px;
  font-family: Rowdies, serif;
  text-transform: uppercase;
  background-color: transparent;  
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;



const Introduction = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleStates, setVisibleStates] = useState([false, false, false, false]);
  const elementRefs = useRef([]);
  const handleStartClick = () => {
    window.open("https://app.axieinfinity.com/marketplace/axies/", "_blank");
    console.log("Button clicked"); 
  };
  
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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <StyledBackgroud1 scrollY={scrollY}>
        <StyledBackgroud2>
          <StyledBackground3>
            <StyledButtonStart onClick={handleStartClick}>
              PLAY NOW
            </StyledButtonStart>
            <StyledBackground4 scrollY={scrollY}>
              <StyledLogo />
            </StyledBackground4>
          </StyledBackground3>
        </StyledBackgroud2>
      </StyledBackgroud1>


    </>
  );
};

export default Introduction;
