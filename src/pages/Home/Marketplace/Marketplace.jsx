import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledBackgroud6 = styled.div`
  background-image: url('./src/assets/backgroud/background-6.jpg'); 
  background-size: cover;
  width: 100%;
  background-position: center;
  height:500vh;
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
  margin-top: -190%;
  height: 45vh; 
  z-index: 1;
  
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
    font-weight: normal;
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
  top: 17%; /* Điều chỉnh vị trí theo chiều dọc */
  left: 50%; /* Canh giữa theo chiều ngang */
  transform: translateX(-50%); /* Canh chỉnh trung tâm */
  display: flex;
  gap: -20%; /* Khoảng cách giữa các nhân vật */
  z-index: 1; /* Cho nhân vật nằm phía trước bảng market */
`;

const StyledCharacter = styled.button`
  background: none;
  border: none;
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
    bottom: -60px; /* Điều chỉnh để đế nằm dưới chân nhân vật */
    left: 50%;
    transform: translateX(-50%);
    
  }

  p {
    margin: -35px 50px;
    font-size: 16px;
    bottom:5px;
    position: relative;
    z-index: 2;
    color: rgb(58, 30, 16);
    left:-42px;
    text-transform: uppercase;
  }

  .price {
    position: absolute;
    font-weight: bold;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
    color: rgb(58, 30, 16);
  }
  .view-text {
    opacity: 0;
    left: 35%;
    transform: translateX(-50%);
    font-size:16px;
    font-family: Roboto Slab, serif;
    bottom: -10px;
    text-transform: none;
    color: rgb(58, 30, 16);
    transition: opacity 0.2s ease-in-out;
  }
  &:hover p, &:hover .price {
    opacity: 0; /* Ẩn mã số và giá tiền khi hover */
  }
  &:hover .view-text {
    opacity: 1; /* Hiển thị "View on Marketplace" khi hover */
  }
`;

const StyledFlag = styled.div`
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
const SlytedBackgroudFlag = styled.div`
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
const SlytedImagePlayConllectOwn = styled.div`
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
const SlytedButtonLeft = styled.button`
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
const SlytedButtonRight = styled.button`
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
const SlytedButtonPlay = styled.button`
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

const SlytedButtonCollect = styled.button`
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

const SlytedButtonOwn = styled.button`
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
const SlytedIconGem = styled.div`
  background-image: url('./src/assets/play-collect-own/icons/gem.png');
  width:100%;
  height:10vh;
  margin-top:-35px;
  margin-left:250px;
  background-repeat: no-repeat;
`;
const StyledHeading = styled.h1`
  /* Thay đổi các thuộc tính CSS ở đây */
  font-size: 14px; /* Kích thước chữ */
  color: rgb(223, 163, 99); /* Màu sắc chữ */
  text-align: center; /* Canh giữa chữ */
  margin-top: -30px;
  padding:0 250px;
`;

const StyledIconsContainer = styled.div`
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

const StyledImageIcons = styled.button`
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
  .h{
    font-family: "Roboto Slab", serif;
  }
`;

const Marketplace = () => {
    const [scrollY, setScrollY] = useState(0);
    const images = [
      './src/assets/play-collect-own/play.jpg',
      './src/assets/play-collect-own/collect.jpg',
      './src/assets/play-collect-own/own.jpg',
    ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Tự động thay đổi hình ảnh sau mỗi 5 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 giây
    return () => clearInterval(interval); // Clear interval khi component unmount
  }, []);

  // Hàm xử lý khi bấm nút left
  const handleLeftClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Hàm xử lý khi bấm nút right
  const handleRightClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePlayClick = () => {
    setCurrentImageIndex(0);
  };

  // Hàm xử lý khi nhấn nút Collect
  const handleCollectClick = () => {
    setCurrentImageIndex(1); // 1 cho hình ảnh Collect
  };

  // Hàm xử lý khi nhấn nút Own
  const handleOwnClick = () => {
    setCurrentImageIndex(2);
  };
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
  const handleCharacterClick = (url) => {
    window.open(url, "_blank");
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
          <StyledCharacter onClick={() => handleCharacterClick("https://app.axieinfinity.com/marketplace/axies/10973914/")}>
            <img src="./src/assets/figure/Market_1.png" alt="Character 1" className="character" />
            <img src="./src/assets/stand/stand.png" alt="Stand" className="stand" />
            <p>#11513458</p>
            <p className="price">$2.29</p>
            <p className="view-text">View on Marketplace</p>
          </StyledCharacter>
          <StyledCharacter onClick={() => handleCharacterClick("https://app.axieinfinity.com/marketplace/axies/10973914/")}>
            <img src="./src/assets/figure/Market_2.png" alt="Character 1" className="character" />
            <img src="./src/assets/stand/stand.png" alt="Stand" className="stand" />
            <p>#11513458</p>
            <p className="price">$2.28</p>
            <p className="view-text">View on Marketplace</p>
          </StyledCharacter>
          <StyledCharacter onClick={() => handleCharacterClick("https://app.axieinfinity.com/marketplace/axies/10973914/")}>
            <img src="./src/assets/figure/Market_3.png" alt="Character 1" className="character" />
            <img src="./src/assets/stand/stand.png" alt="Stand" className="stand" />
            <p>#11513458</p>
            <p className="price">$2.27</p>
            <p className="view-text">View on Marketplace</p>
          </StyledCharacter>
        </StyledCharacterContainer>
        <StyledCharacterContainer style={{ top: '25%' }}>
          <StyledCharacter onClick={() => handleCharacterClick("https://app.axieinfinity.com/marketplace/axies/10973917/")}>
            <img src="./src/assets/figure/Market_4.png" alt="Character 1" className="character" />
            <img src="./src/assets/stand/stand.png" alt="Stand" className="stand" />
            <p>#11513461</p>
            <p className="price">$2.26</p>
            <p className="view-text">View on Marketplace</p>
          </StyledCharacter>
          <StyledCharacter onClick={() => handleCharacterClick("https://app.axieinfinity.com/marketplace/axies/10973918/")}>
            <img src="./src/assets/figure/Market_5.png" alt="Character 1" className="character" />
            <img src="./src/assets/stand/stand.png" alt="Stand" className="stand" />
            <p>#11513462</p>
            <p className="price">$2.25</p>
            <p className="view-text">View on Marketplace</p>
          </StyledCharacter>
          <StyledCharacter onClick={() => handleCharacterClick("https://app.axieinfinity.com/marketplace/axies/10973919/")}>
            <img src="./src/assets/figure/Market_6.png" alt="Character 1" className="character" />
            <img src="./src/assets/stand/stand.png" alt="Stand" className="stand" />
            <p>#11513463</p>
            <p className="price">$2.24</p>
            <p className="view-text">View on Marketplace</p>
          </StyledCharacter>
          <StyledCharacter onClick={() => handleCharacterClick("https://app.axieinfinity.com/marketplace/axies/10973919/")}>
            <img src="./src/assets/figure/Market_7.png" alt="Character 1" className="character" />
            <img src="./src/assets/stand/stand.png" alt="Stand" className="stand" />
            <p>#11513463</p>
            <p className="price">$2.24</p>
            <p className="view-text">View on Marketplace</p>
          </StyledCharacter>
        </StyledCharacterContainer>
        <StyledCharacterContainer style={{top:'32%'}}>
        <StyledCharacter onClick={() => handleCharacterClick("https://app.axieinfinity.com/marketplace/axies/10973919/")}>
            <img src="./src/assets/figure/Market_8.png" alt="Character 1" className="character" />
            <img src="./src/assets/stand/stand.png" alt="Stand" className="stand" />
            <p>#11513463</p>
            <p className="price">$2.24</p>
            <p className="view-text">View on Marketplace</p>
          </StyledCharacter>
          <StyledCharacter onClick={() => handleCharacterClick("https://app.axieinfinity.com/marketplace/axies/10973919/")}>
            <img src="./src/assets/figure/Market_9.png" alt="Character 1" className="character" />
            <img src="./src/assets/stand/stand.png" alt="Stand" className="stand" />
            <p>#11513463</p>
            <p className="price">$2.24</p>
            <p className="view-text">View on Marketplace</p>
          </StyledCharacter>
        </StyledCharacterContainer>
        <StyledCharacterContainer style={{top:'39%'}}>
        <StyledCharacter onClick={() => handleCharacterClick("https://app.axieinfinity.com/marketplace/axies/10973919/")}>
            <img src="./src/assets/figure/Market_10.png" alt="Character 1" className="character" />
            <img src="./src/assets/stand/stand.png" alt="Stand" className="stand" />
            <p>#11513463</p>
            <p className="price">$2.24</p>
            <p className="view-text">View on Marketplace</p>
          </StyledCharacter>
          <StyledCharacter onClick={() => handleCharacterClick("https://app.axieinfinity.com/marketplace/axies/10973919/")}>
            <img src="./src/assets/figure/Market_11.png" alt="Character 1" className="character" />
            <img src="./src/assets/stand/stand.png" alt="Stand" className="stand" />
            <p>#11513463</p>
            <p className="price">$2.24</p>
            <p className="view-text">View on Marketplace</p>
          </StyledCharacter>
          <StyledCharacter onClick={() => handleCharacterClick("https://app.axieinfinity.com/marketplace/axies/10973919/")}>
            <img src="./src/assets/figure/Market_12.png" alt="Character 1" className="character" />
            <img src="./src/assets/stand/stand.png" alt="Stand" className="stand" />
            <p>#11513463</p>
            <p className="price">$2.24</p>
            <p className="view-text">View on Marketplace</p>
          </StyledCharacter>
        </StyledCharacterContainer>
        <StyledFlag>
          <SlytedBackgroudFlag>
            <SlytedImagePlayConllectOwn image={images[currentImageIndex]}>
            <SlytedButtonLeft onClick={handleLeftClick} />
            <SlytedButtonRight onClick={handleRightClick} />
            </SlytedImagePlayConllectOwn>
            <SlytedButtonPlay active={currentImageIndex === 0} onClick={handlePlayClick}>Play
            <SlytedIconGem/>
            </SlytedButtonPlay>
            <SlytedButtonCollect active={currentImageIndex === 1} onClick={handleCollectClick}>Collect
              <SlytedIconGem/>

            </SlytedButtonCollect>
            <SlytedButtonOwn active={currentImageIndex === 2} onClick= {handleOwnClick}>Own

            </SlytedButtonOwn>
            {currentImageIndex === 0 && (
              <StyledHeading>Axies are tickets to an infinite universe of games. Axie owners get automatic access to new games and experiences when they're released!</StyledHeading>
            )}
            {currentImageIndex === 1 && (
            <StyledHeading>Some Axies are rare with limited-edition body parts that will never be released again. Show off to your friends and family!</StyledHeading>
            )}
            {currentImageIndex === 2 && (
              <StyledHeading>Your axie digital collectibles are yours. You can use them across multiple games, trade them, sell them, and even use them to obtain more unique tradable resources and collectibles.</StyledHeading>
            )}
            <StyledIconsContainer>
              <StyledImageIcons>
              <img src="./src/assets/play-collect-own/icons/egg.png" alt="icon egg" className="icons" />
              <h2 className = 'h2'>12.060.348</h2>
              <h className = 'h'>Total Axies</h>
              </StyledImageIcons>
              <StyledImageIcons>
              <img src="./src/assets/play-collect-own/icons/idol.png" alt="icon idol" className="icons" />
              <h2 className = 'h2'>2.020.310</h2>
              <h className = 'h'>Total Owners</h>
              </StyledImageIcons>
              <StyledImageIcons>
              <img src="./src/assets/play-collect-own/icons/coin.png" alt="icon coin" className="icons" />
              <h2 className = 'h2'>$3.5B</h2>
              <h className = 'h'>Total Sales</h>
              </StyledImageIcons>
            </StyledIconsContainer>
          </SlytedBackgroudFlag>
        </StyledFlag>
      </StyledBackgroud6>
    </>
  );
}

export default Marketplace;
