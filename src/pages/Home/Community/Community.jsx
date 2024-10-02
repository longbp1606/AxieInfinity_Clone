import { Typography } from 'antd';
import * as Styled from './Community.styled';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const Community = () => {
    return (
        <Styled.CommunityWrapper vertical>
            <Title>Community</Title>

            <Styled.CommunityContainer vertical align='center'>
                <Styled.CommunityBackground />

                <Styled.PhotoWrapper1 vertical>
                    <Styled.AnimationLayer>
                        <Styled.PhotoContainer1>
                            <Styled.Photo1 />
                        </Styled.PhotoContainer1>
                    </Styled.AnimationLayer>
                </Styled.PhotoWrapper1>

                <Styled.PhotoWrapper2 vertical>
                    <Styled.AnimationLayer>
                        <Styled.PhotoContainer2>
                            <Styled.Photo2 />
                        </Styled.PhotoContainer2>
                    </Styled.AnimationLayer>
                </Styled.PhotoWrapper2>

                <Styled.PhotoWrapper3 vertical>
                    <Styled.AnimationLayer>
                        <Styled.PhotoContainer3>
                            <Styled.Photo3 />
                        </Styled.PhotoContainer3>
                    </Styled.AnimationLayer>
                </Styled.PhotoWrapper3>

                <Styled.PhotoWrapper4 vertical>
                    <Styled.AnimationLayer>
                        <Styled.PhotoContainer4>
                            <Styled.Photo4 />
                        </Styled.PhotoContainer4>
                    </Styled.AnimationLayer>
                </Styled.PhotoWrapper4>

                <Styled.PhotoWrapper5 vertical>
                    <Styled.AnimationLayer>
                        <Styled.PhotoContainer5>
                            <Styled.Photo5 />
                        </Styled.PhotoContainer5>
                    </Styled.AnimationLayer>
                </Styled.PhotoWrapper5>

                <Styled.PhotoWrapper6 vertical>
                    <Styled.AnimationLayer>
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