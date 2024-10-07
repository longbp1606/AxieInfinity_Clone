import { Typography } from 'antd';
import * as Styled from './Community.styled';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const { Title, Text } = Typography;

const Community = () => {
    const [visibleStates, setVisibleStates] = useState([false, false, false, false, false, false]);
    const elementRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = elementRefs.current.indexOf(entry.target);
                    if (index !== -1) {
                        setVisibleStates((prev) => {
                            const newVisibleStates = [...prev];
                            newVisibleStates[index] = entry.isIntersecting;
                            return newVisibleStates;
                        });
                    }
                });
            },
            { threshold: 0.2 }
        );

        elementRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            elementRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

    return (
        <Styled.CommunityWrapper vertical>
            <Title>Community</Title>

            <Styled.CommunityContainer vertical align='center'>
                <Styled.CommunityBackground/>

                <Styled.PhotoWrapper1 vertical>
                    <Styled.AnimationLayer 
                        ref={(el) => (elementRefs.current[0] = el)} 
                        isVisible={visibleStates[0]}
                    >
                        <Styled.PhotoContainer1>
                            <Styled.Photo1 />
                        </Styled.PhotoContainer1>
                    </Styled.AnimationLayer>
                </Styled.PhotoWrapper1>

                <Styled.PhotoWrapper2 vertical>
                    <Styled.AnimationLayer
                        ref={(el) => (elementRefs.current[1] = el)} 
                        isVisible={visibleStates[1]}
                    >
                        <Styled.PhotoContainer2>
                            <Styled.Photo2 />
                        </Styled.PhotoContainer2>
                    </Styled.AnimationLayer>
                </Styled.PhotoWrapper2>

                <Styled.PhotoWrapper3 vertical>
                    <Styled.AnimationLayer
                        ref={(el) => (elementRefs.current[2] = el)} 
                        isVisible={visibleStates[2]}
                    >
                        <Styled.PhotoContainer3>
                            <Styled.Photo3 />
                        </Styled.PhotoContainer3>
                    </Styled.AnimationLayer>
                </Styled.PhotoWrapper3>

                <Styled.PhotoWrapper4 vertical>
                    <Styled.AnimationLayer
                        ref={(el) => (elementRefs.current[3] = el)} 
                        isVisible={visibleStates[3]}
                    >
                        <Styled.PhotoContainer4>
                            <Styled.Photo4 />
                        </Styled.PhotoContainer4>
                    </Styled.AnimationLayer>
                </Styled.PhotoWrapper4>

                <Styled.PhotoWrapper5 vertical>
                    <Styled.AnimationLayer
                        ref={(el) => (elementRefs.current[4] = el)} 
                        isVisible={visibleStates[4]}
                    >
                        <Styled.PhotoContainer5>
                            <Styled.Photo5 />
                        </Styled.PhotoContainer5>
                    </Styled.AnimationLayer>
                </Styled.PhotoWrapper5>

                <Styled.PhotoWrapper6 vertical>
                    <Styled.AnimationLayer
                        ref={(el) => (elementRefs.current[5] = el)} 
                        isVisible={visibleStates[5]}
                    >
                        <Styled.PhotoContainer6>
                            <Styled.Photo6 />
                        </Styled.PhotoContainer6>
                    </Styled.AnimationLayer>
                </Styled.PhotoWrapper6>
            </Styled.CommunityContainer>

            <Styled.SocialWrapper>
                <Styled.SocialContainer vertical align='center'>
                    <Text>
                        Axie is place for friendship, education, and fun.
                        Meet explorers from all over the world and build together!
                    </Text>

                    <Styled.ButtonContainer justify='space-between'>
                        <Link to='https://welcome.skymavis.com/regional-servers' target='_blank'>
                            <Styled.DiscordButton>
                                Discord
                            </Styled.DiscordButton>
                        </Link>

                        <Link to='https://twitter.com/AxieInfinity' target='_blank'>
                            <Styled.TwitterButton>
                                Twitter
                            </Styled.TwitterButton>
                        </Link>
                    </Styled.ButtonContainer>
                </Styled.SocialContainer>
            </Styled.SocialWrapper>
        </Styled.CommunityWrapper>
    )
}

export default Community;