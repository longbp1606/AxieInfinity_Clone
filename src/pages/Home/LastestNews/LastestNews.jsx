import React from "react";
import * as Styled from "./LastestNews.styled";
import { useInView } from "react-intersection-observer";
import Card from "../../../assets/poscard/postcard.png";
import Note from "../../../assets/node/note-5.png";
import Figure from "../../../assets/figure/Market_1.png";

const LastestNews = () => {
  const [leftRef, leftInView] = useInView({ threshold: 0.1 });
  const [rightRef, rightInView] = useInView({ threshold: 0.1 });

  return (
    <Styled.ShowCaseWrapper>
      <Styled.ShowCaseContainer>
        <Styled.QuestionContainer>
          <div
            ref={leftRef}
            className={`animate__animated ${
              leftInView ? "animate__fadeInLeft" : ""
            }`}
            style={{
              animationDuration: "0.4s",
              opacity: leftInView ? "1" : "0",
            }}
          >
            <Styled.ContentLeftWrapper>
              <Styled.BackgroundLeft>
                <Styled.InnerContentWrapper>
                  <h2>
                    What's <br />
                    Axie Infinity?
                  </h2>
                  <p>
                    Axie Infinity is a virtual world filled with cute,
                    formidable creatures known as Axies. Axies can be battled,
                    bred, collected, and even used to earn resources &amp;
                    collectibles that can be traded on an open marketplace.
                    <br />
                    Axie was designed to introduce the world to an exciting new
                    technology called Blockchain, through a fun, nostalgic,
                    &amp; charming game.
                  </p>
                </Styled.InnerContentWrapper>
                <Styled.ImageCard>
                  <img src={Card} alt="Axie postcard" />
                </Styled.ImageCard>
              </Styled.BackgroundLeft>
            </Styled.ContentLeftWrapper>
          </div>
          <div
            ref={rightRef}
            className={`animate__animated ${
              rightInView ? "animate__fadeInRight" : ""
            }`}
            style={{
              animationDuration: "0.4s",
              opacity: rightInView ? "1" : "0",
            }}
          >
            <Styled.ContentRightWrapper>
              <Styled.BackgroundRight>
                <Styled.ImageBackgroundRight>
                  <Styled.InnerContentRightWrapper>
                    <img src={Figure} alt="Character 1" />
                  </Styled.InnerContentRightWrapper>
                </Styled.ImageBackgroundRight>
              </Styled.BackgroundRight>
              <span>
                <Styled.ButtonInfinityHow>
                  Infinity how?
                </Styled.ButtonInfinityHow>
              </span>
            </Styled.ContentRightWrapper>
          </div>
          <Styled.ImageNote>
            <Styled.ImageFigure src={Note} alt="Axie note" />
          </Styled.ImageNote>
        </Styled.QuestionContainer>
      </Styled.ShowCaseContainer>
    </Styled.ShowCaseWrapper>
  );
};

export default LastestNews;
