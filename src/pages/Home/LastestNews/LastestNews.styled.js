import styled from "styled-components";
import Background from '../../../assets/backgroud/background-4.jpg';
import Note from '../../../assets/showcase/note.png';
import Table from '../../../assets/table/table_6.png';
import Button from '../../../assets/button/button_2.png';

export const ShowCaseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-position: center center;
    // padding-bottom: 80px;
    // background-image: url(${Background});

    ${({ theme }) => theme.breakpoints.down('xl')} {
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const ShowCaseContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1280px;
    margin: 0px auto;
`;
export const QuestionContainer = styled.div`
    display: grid;
    grid-template-columns: 625fr 655fr;
    align-items: center;
    position: relative;

    ${({ theme }) => theme.breakpoints.down('xl')} {
        display: flex;
        flex-direction: column;
        gap: 32px;

        & .animatedWrapper {
            width: 100%;
        }
    }
`;

export const ContentLeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    margin: 0px auto;
    max-width: 625px;
    align-items: center;
`;

export const ContentRightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    position: relative;
    max-width: 655px;

    ${({ theme }) => theme.breakpoints.down('xl')} {
        margin: 0px auto;
    }
`;
export const BackgroundLeft = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 122.5%;
    background-image: url(${Note});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    min-width: 440px;
    max-width: 625px;
    aspect-ratio: 625 / 633;
`;
export const BackgroundRight = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding-bottom: 61.39%;
    width: 100%;
`;
export const ImageBackgroundRight = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-image: url(${Table});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: drop-shadow(rgba(0, 0, 0, 0.5) 0px 8px 10px);
    display: flex;
    justify-content:center;
    align-items:center;
`;
export const InnerContentRightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    left: 3%;
    top: 12%;
    height: 80%;
    width: 68%;
    position: relative;
`
export const ImageRightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
`
export const InnerContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 17.3776%;
    left: 16.8%;
    width: 64%;
    text-align: left;
    gap: 20px;

    & h2{
      margin: 0px;
      font-weight: 500;
      text-transform: uppercase;
      text-align: left;
      font-size: 48px;
      color: rgb(112, 53, 25);
      font-family: Rowdies, serif;
      line-height: 1.16667;
    }
    & p{
      margin: 0px;
      font-family: "Roboto Slab", serif;
      line-height: 1.5;
      text-align: left;
      font-size: 16px;
      color: rgb(58, 30, 16);
      font-weight: 500;
    }

    ${({ theme }) => theme.breakpoints.down('xl')} {
        & h2 {
            font-size: 5rem;
        }
    }
    ${({ theme }) => theme.breakpoints.down('md')} {
        & h2 {
            font-size: 4rem;
        }

        p {
            font-size: 2rem
        }
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
        p {
            font-size: 1.75rem
        }
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
        p {
            font-size: 1.6rem;
        }
    }
`;

export const ButtonInfinityHow = styled.button`
  display: inline-flex;
    position: relative;
    box-sizing: border-box;
    background-color: transparent;
    outline: 0px;
    border: 0px;
    margin: 0px;
    cursor: pointer;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-weight: 500;
    line-height: 1.75;
    min-width: 64px;
    padding: 6px 8px;
    border-radius: 4px;
    white-space: nowrap;
    background-image: url(${Button});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    align-items: center;
    justify-content: center;
    user-select: none;
    width: 224px;
    height: 60px;
    font-family: Rowdies, serif;
    font-size: 20px;
    text-transform: none;
    color: rgb(223, 163, 99);
    transition: transform 0.2s;
`

export const ImageCard = styled.div`
    position: absolute;
    top: 74%;
    right: 2%;
    max-width: 228px;
`

export const ImageNote = styled.div`
    position: absolute;
    bottom: 0px;
    transform: translateY(95%) translateX(-50%);
    left: 79%;
    z-index: 10;
    max-width: 142px;
`
export const ImageFigure = styled.img`
    width: 100%;
`