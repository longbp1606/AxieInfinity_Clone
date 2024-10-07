import { Image, Typography } from 'antd';
import * as Styled from './EmbraceInfinity.styled';
import ConstellationURL from '../../../assets/templates/home/constellation.png';
import { Link } from 'react-router-dom';
import { EmbraceData } from './EmbraceInfinity.data';
import Community from '../Community/Community';
import { useEffect, useState } from 'react';

const { Title, Text } = Typography;

const EmbraceInfinity = () => {
  return (
    <Styled.SectionWrapper vertical>
      <Styled.EmbraceInfinitySection>
        <Styled.EmbraceInfinityWrapper vertical>

          <Styled.ConstellationContainer>
            <Image src={ConstellationURL} alt='constellation' />
          </Styled.ConstellationContainer>

          <Styled.EmbraceInfinityContainer vertical>
            <Title>Embrace infinity</Title>

            <Styled.EmbraceImageArea>
              <Styled.EmbraceImageWrapper vertical>
                <Styled.FirstHalfContainer vertical align='center'>

                  {EmbraceData.slice(0, 2).map((item) => (
                    <Styled.ElementContainer vertical key={item.key}>
                      <Styled.ElementImageHolder>
                        {item.image}
                      </Styled.ElementImageHolder>

                      <Title level={3}>{item.label}</Title>

                      <Text>{item.content}</Text>
                    </Styled.ElementContainer>
                  ))}

                </Styled.FirstHalfContainer>

                <Styled.SecondHalfContainer vertical>
                  {EmbraceData.slice(2, 6).map((item) => (
                    <Styled.ElementContainer vertical key={item.key}>
                      <Styled.ElementImageHolder>
                        {item.image}
                      </Styled.ElementImageHolder>

                      <Title level={3}>{item.label}</Title>

                      <Text>{item.content}</Text>
                    </Styled.ElementContainer>
                  ))}
                </Styled.SecondHalfContainer>
              </Styled.EmbraceImageWrapper>
            </Styled.EmbraceImageArea>

          </Styled.EmbraceInfinityContainer>
        </Styled.EmbraceInfinityWrapper>
      </Styled.EmbraceInfinitySection>

      <Community />
    </Styled.SectionWrapper>
  )
}

export default EmbraceInfinity;