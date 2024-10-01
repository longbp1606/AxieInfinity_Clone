import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledBackgroud6 = styled.div`
  background-image: url('./src/assets/backgroud/background-6.jpg'); 
  background-size: cover;
  width: 100%;
  background-position: center;
  height: 280vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
`;

const StyledMaketTable = styled.div`
  background-image: url('./src/assets/table/MarketTable_1.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  background-position: center;
  margin-top: -100%;
  height: 45vh; 
  z-index: 1; /* Để bảng Market nổi lên trên */
  
  h2 {
    color: rgb(223, 163, 99);
    font-size: 250%;
    margin-top: 65px;
    text-align: center;
    font-family: Rowdies, serif;
    text-transform: uppercase;
  }
  
  p {
    color: rgb(223, 163, 99);
    font-size: 16px;
    margin-top: 30px;
    text-align: center;
    font-family: Roboto Slab, serif;
    line-height: 0px;
    font-weight: bold;
  }
`;

const ButtonVisit = styled.button`
  background-image: url('./src/assets/button/button_2.png');
  color: rgb(223, 163, 99);
  border: none;
  border-radius: 15px;
  padding: 15px 30px;
  cursor: pointer;
  position: relative;
  top: 9%;
  margin-left: 43%;
  width: 14%;
  align-items: center;
  font-size: 20px;
  font-family: Rowdies, serif;
  background-color: transparent;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledCharacterContainer = styled.div`
  position: absolute; /* Đặt vị trí tuyệt đối để dễ di chuyển */
  top: 30%; /* Điều chỉnh vị trí theo chiều dọc */
  left: 50%; /* Canh giữa theo chiều ngang */
  transform: translateX(-50%); /* Canh chỉnh trung tâm */
  display: flex;
  gap: -20%; /* Khoảng cách giữa các nhân vật */
  z-index: 1; /* Cho nhân vật nằm phía trước bảng market */
`;

const StyledCharacter = styled.div`
  text-align: center;
  margin-top: -150px;
  color: rgb(223, 163, 99);
  position: relative; /* Để đế và nhân vật chồng lên nhau */

  img.character {
    width: 350px;
    height: auto;
    position: relative;
    z-index: 1;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
  }
  }

  img.stand {
    width: 250px; /* Điều chỉnh kích thước của đế */
    position: absolute;
    bottom: -40px; /* Điều chỉnh để đế nằm dưới chân nhân vật */
    left: 50%;
    transform: translateX(-50%);
    
  }

  p {
    margin: -35px 50px;
    font-size: 16px;
    font-weight: bold;
    position: relative;
    z-index: 2;
    color: rgb(58, 30, 16);
    left:-50px;
  }

  .price {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
    color: rgb(58, 30, 16);
  }
`;

const Marketplace = () => {
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

  const handleVisitClick = () => {
    window.open("https://app.axieinfinity.com/marketplace/axies/", "_blank");
  };

  return (
    <>
      <StyledBackgroud6>
        <StyledMaketTable>
          <h2>Marketplace</h2>
          <p>Trade or sell your axies with anyone, anywhere. You own your axies just like a physical</p>
          <p>trading card or figurine.</p>
          <ButtonVisit onClick={handleVisitClick}>Visit</ButtonVisit>
        </StyledMaketTable>
        <StyledCharacterContainer>
          <StyledCharacter>
            <img src="./src/assets/figure/Market_1.png" alt="Character 1" className="character" />
            <img src="./src/assets/stand/stand.png" alt="Stand" className="stand" />
            <p>#11513458</p>
            <p className="price">$2.29</p>
          </StyledCharacter>
          <StyledCharacter>
            <img src="./src/assets/figure/Market_2.png" alt="Character 1" className="character" />
            <img src="./src/assets/stand/stand.png" alt="Stand" className="stand" />
            <p>#11513458</p>
            <p className="price">$2.28</p>
          </StyledCharacter>
          <StyledCharacter>
            <img src="./src/assets/figure/Market_3.png" alt="Character 1" className="character" />
            <img src="./src/assets/stand/stand.png" alt="Stand" className="stand" />
            <p>#11513458</p>
            <p className="price">$2.27</p>
          </StyledCharacter>
        </StyledCharacterContainer>
      </StyledBackgroud6>
    </>
  );
}

export default Marketplace;
