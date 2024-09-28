import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledBackgroud1 = styled.div`
  background-image: url('./src/assets/backgroud/background-5.jpg'); /* Cập nhật đường dẫn nếu cần */
  background-size: cover;
  width: 100%;
  background-position: center;
  height: 180vh; /* Chiều cao 100% của viewport */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* Màu chữ */
  transform: translateY(${(props) => props.scrollY * -0.5}px);
  clip-path: inset(0 0 280px 0);
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
  background-size: cover;
  width: 100%;
  margin-top: -3%;
  height: 150vh;
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
  position: absolute; /* Đặt vị trí tuyệt đối */
  left: 49%; /* Canh giữa theo chiều ngang */
  transform: translateX(-50%); /* Đẩy logo về bên trái một nửa chiều rộng của nó */
  margin-top: 11%; /* Điều chỉnh độ cao của logo */
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

const StyledBackgroud5 = styled.div`
  background-color: rgb(58, 30, 16);
  width: 100%;
  margin-top: -281px;
  height: 80vh;
  transform: translateY(${(props) => props.scrollY * -0.5}px);
  
`;

const StyledNote1 = styled.div`
  background-image: url('./src/assets/table/table_1.png');
  width: 26%;
  height: 58vh;
  background-size: cover;
  background-position: center;
  margin-left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  h2 {
    color: rgb(58, 30, 16);
    font-size: 250%;
    margin: 30px;
    font-family: Rowdies, serif;
    text-transform: uppercase;
  }
  
  p {
    color: rgb(58, 30, 16);
    margin-top: 100px;
    font-size: 100%;
    margin: -50px;
    text-align: center;
    font-weight: 400;
    padding: 80px;
    font-family: "Roboto Slab", serif;
    text-transform: uppercase;
  }
`;

const StyledNote2 = styled.div`
  background-image: url('./src/assets/table/table_1.png');
  width: 26%;
  height: 58vh;
  background-size: cover;
  background-position: center;
  margin-left: 37%;
  margin-top: -423px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  h2 {
    color: rgb(58, 30, 16);
    font-size: 250%;
    margin: 30px; /* Đồng bộ với StyledNote1 */
    font-family: Rowdies, serif;
    text-transform: uppercase;
  }
  
  p {
    color: rgb(58, 30, 16);
    top: 100px;
    font-size: 100%;
    margin: -40px;
    text-align: center;
    font-weight: 400;
    padding: 80px;
    font-family: "Roboto Slab", serif;
    text-transform: uppercase;
  }
`;
const StyledNote3 = styled.div`
  background-image: url('./src/assets/table/table_1.png');
  width: 26%;
  height: 58vh;
  background-size: cover;
  background-position: center;
  margin-left: 68%;
  margin-top: -423px; /* Đồng bộ với Note2 */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  h2 {
    color: rgb(58, 30, 16);
    font-size: 250%;
    margin: 30px; /* Đồng bộ với StyledNote1 và StyledNote2 */
    font-family: Rowdies, serif;
    text-transform: uppercase;
  }

  p {
    color: rgb(58, 30, 16);
    margin-top: 100px;
    font-size: 100%;
    margin: -50px;
    text-align: center;
    font-weight: 400;
    padding: 60px;
    font-family: "Roboto Slab", serif;
    text-transform: uppercase;
  }
`;

const BubaImage = styled.div`
  background-image: url('./src/assets/figure/buba.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  margin-top: -50px;
  height: 200%;
`;

const StyledBuba = styled.div`
  width: 200%;
  height: 100vh;
  margin-top: 50px;
`;
const PuffyImage = styled.div`
  background-image: url('./src/assets/figure/puffy.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  margin-top: -50px;
  height: 200%;
`;

const StyledPuffy = styled.div`
  width: 200%;
  height: 100vh;
  margin-top: 50px;
`;
const OlekImage = styled.div`
  background-image: url('./src/assets/figure/olek.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  margin-top: -50px;
  height: 200%;
`;

const StyledOlek = styled.div`
  width: 200%;
  height: 100vh;
  margin-top: 50px;
`;
const StyledCard1 = styled.div`
  background-image: url('./src/assets/card/card.jpg');
  background-size: contain;
  width:130%;
  background-repeat: no-repeat;
  margin-left: -100px;
  transform: translateY(${(props) => props.scrollY * -0.5}px);
  height:60vh;
`;
const Introduction = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <StyledBackgroud1 scrollY={scrollY}>
        <StyledBackgroud2>
          <StyledBackground3>
            <StyledButtonStart>PLAY NOW</StyledButtonStart>
            <StyledBackground4 scrollY={scrollY}>
              <StyledLogo />
            </StyledBackground4>
          </StyledBackground3>
        </StyledBackgroud2>
      </StyledBackgroud1>

      <StyledBackgroud5 scrollY={scrollY}>
        <>
          <StyledNote1>
            <h2>Free Axies</h2>
            <p>
              Start your adventure with free starter Axies each with unique
              abilities and playstyles.
            </p>
            <StyledBuba>
              <BubaImage />
            </StyledBuba>
          </StyledNote1>

          <StyledNote2>
            <h2>Epic Power Ups</h2>
            <p>
              Equip your axies with runes and charms that power up their
              abilities and unlock new strategies!
            </p>
            <StyledPuffy>
                <PuffyImage/>
            </StyledPuffy>
          </StyledNote2>

            <StyledNote3>
                <h2>Infinite Adventure</h2>
                <p>Each axie has unique strengths based on its genes. With billions of genetic combinations, the possibilities are infinite.</p>
                <StyledOlek>
                <OlekImage/>
            </StyledOlek>
            </StyledNote3>
        </>
      </StyledBackgroud5>
      <StyledCard1 scrollY={scrollY}/>
    </>
  );
};

export default Introduction;
