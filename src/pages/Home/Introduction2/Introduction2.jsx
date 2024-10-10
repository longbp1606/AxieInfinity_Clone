import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
  
const StyledBackgroud5 = styled.div`
  background-color: rgb(58, 30, 16);
  width: 100%;
  margin-top: -250px;
  height: 120vh;
 overflow: hidden;
`;

const StyledCharacterContainer = styled.div`
  position: absolute; /* Đặt vị trí tuyệt đối để dễ di chuyển */
  top: 170%; /* Điều chỉnh vị trí theo chiều dọc */
  left: 40%; /* Canh giữa theo chiều ngang */
  transform: translateX(-50%); /* Canh chỉnh trung tâm */
  display: flex;
  gap: 13%; /* Khoảng cách giữa các nhân vật */
  z-index: 1; /* Cho nhân vật nằm phía trước bảng market */
`;

const StyledCharacter = styled.button`
  background: none;
  border: none;
  
  text-align: center;
  margin-top: 0px;
  color: rgb(223, 163, 99);
  position: relative; 
  

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

  img.table_1 {
    width: 400px; /* Điều chỉnh kích thước của đế */
    position: absolute;
    bottom: -80px; /* Điều chỉnh để đế nằm dưới chân nhân vật */
    left: 52%;
    transform: translateX(-50%);
    
  }
  .h2{
    top:-20%;
    position: absolute; /* Đặt vị trí tuyệt đối để căn giữa trong button */
    left: 60px;
    position: absolute;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 30px;
    font-family: Rowdies, serif;
 /* Điều chỉnh nếu cần để cách chân nhân vật */
    color: rgb(112, 53, 25);
    padding:0px;
    }
  .text {
    top:15%;
    position: absolute; /* Đặt vị trí tuyệt đối để căn giữa trong button */
    left: 0%;
    font-weight: bold;
    font-size: 17px;
    font-family: 'Roboto Slab', serif;
 /* Điều chỉnh nếu cần để cách chân nhân vật */
    color: rgb(112, 53, 25);
    padding:0px;
  }

`;
const StyledCard = styled.div`
    background: none;
  border: none;
  text-align: center;
  margin-top:600px;
`;

const Introduction2 = () => {
    
    const [visibleStates, setVisibleStates] = useState([false, false, false, false]);
    const elementRefs = useRef([]);
    useEffect(() => {
      const handleScroll = () => {
  
        elementRefs.current.forEach((el, index) => {
          if (el && el.getBoundingClientRect().top < window.innerHeight) {
            setVisibleStates((prevVisibleStates) =>
              prevVisibleStates.map((state, i) => (i === index ? true : state))
            );
          }
        });
      };
      return () => {
      };
    }, []);
  
    return (
                <>
                    <StyledBackgroud5>
                        <StyledCharacterContainer >
                            <StyledCharacter>
                                <img src="./src/assets/figure/buba.png" alt="Character 1" className="character"  style={{ top: '60%' }}/>
                                <img src="./src/assets/table/table_1.png" alt="table_1" className="table_1" />
                                <h className="h2">Free Axies</h>
                                <p className="text">Start your adventure with free starter Axies each with unique abilities and playstyles.</p>
                            </StyledCharacter>
                            <StyledCharacter>
                                <img src="./src/assets/figure/puffy.png" alt="Character 1" className="character" style={{ top: '50%' }}/>
                                <img src="./src/assets/table/table_1.png" alt="table_1" className="table_1" />
                                <h className="h2">Epic Power Ups </h>
                                <p className="text">Equip your axies with runes and charms that power up their abilities and unlock new strategies!</p>
                            </StyledCharacter>
                            <StyledCharacter>
                                <img src="./src/assets/figure/olek.png" alt="Character 1" className="character" style={{ top: '50%' }}/>
                                <img src="./src/assets/table/table_1.png" alt="table_1" className="table_1" />
                                <h className="h2">Infinite Adventure </h>
                                <p className="text">Each axie has unique strengths based on its genes. With billions of genetic combinations, the possibilities are infinite.</p>
                            </StyledCharacter>
                            </StyledCharacterContainer>
                            <StyledCard >
                        <img src="./src/assets/card/card.jpg"/>
                    </StyledCard>
                    </StyledBackgroud5>

                </>
            );
};
export default Introduction2;