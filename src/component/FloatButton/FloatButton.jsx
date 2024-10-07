import React from 'react'
import { Link } from 'react-router-dom';
import * as Styled from './FloatButton.styled';
import Discord from '../../assets/logo/discord.svg';
import { Col } from 'antd';

const FloatButton = () => {
    return (
        <>
            <Link to='https://welcome.skymavis.com/regional-servers' target='_blank'>
                <Styled.FloatButtonWrapper>
                    <Styled.DiscordLogo src={Discord} alt='Discord' />

                    <Col lg={15} md={0} sm={0} xs={0}>
                        <Styled.TextContainer>
                            <p>Confused?</p>
                            <h2>Meet the <br />Community</h2>
                        </Styled.TextContainer>
                    </Col>
                </Styled.FloatButtonWrapper>
            </Link>
        </>
    )
}

export default FloatButton;