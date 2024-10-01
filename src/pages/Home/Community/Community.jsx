import { Typography } from 'antd';
import * as Styled from './Community.styled';

const { Title } = Typography;

const Community = () => {
    return (
        <Styled.CommunityWrapper vertical>
            <Title>Community</Title>

            <Styled.CommunityContainer vertical align='center'>
                <Styled.CommunityBackground/>
                
                <Styled.PhotoWrapper1>
                    <Styled.AnimationLayer>
                        <Styled.PhotoContainer1>
                            <Styled.Photo1/>
                        </Styled.PhotoContainer1>
                    </Styled.AnimationLayer>
                </Styled.PhotoWrapper1>
            </Styled.CommunityContainer>
        </Styled.CommunityWrapper>
    )
}

export default Community;