import { useState, useEffect  } from "react";
import styled from "styled-components";
const StyledBackgroud1 = styled.div`
    background-image: url('./src/assets/backgroud/background-5.jpg'); /* Cập nhật đường dẫn nếu cần */
    background-size: cover;
    width:100%;
    background-position: center;
    height: 180vh; /* Chiều cao 100% của viewport */
    display: flex;
    justify-content: center;
    align-items: center;
    color: white; /* Màu chữ */
    transform: translateY(${props => props.scrollY * -0.5}px);
    clip-path: inset(0 0 280px 0);
`;
const StyledBackgroud2 = styled.div`
    background-image: url('./src/assets/backgroud/background-1.png');
    background-size: cover;
    width: 110%;
    height: 180vh;
    margin:0%;
`
const StyledBackground3 = styled.div`
    background-image: url('./src/assets/backgroud/background-2.png');
    background-size: cover;
    width:100%;
    margin-top: -3%;
    height: 150vh;
`
const StyledBackground4 = styled.div`
    background-image: url('./src/assets/backgroud/background-3.png');
    background-size: cover;
    width:100%;
    margin-top: -3%;
    height: 200vh;
    transform: translateY(${props => props.scrollY * -0.5}px);
`
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
    width:180px;
    font-size:20px;
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
    width:100%;
    margin-top:-281px;
    height:100vh;
    transform: translateY(${props => props.scrollY * -0.5}px);
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

            </>
        </StyledBackgroud5>
        
            
        
        </>
    )
};

export default Introduction;