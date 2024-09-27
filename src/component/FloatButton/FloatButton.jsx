import React from 'react'
import { Link } from 'react-router-dom';
import * as Styled from './FloatButton.styled';
import Discord from '../../assets/logo/discord.svg';

const FloatButton = () => {
    return (
        <>
            <Link to='https://welcome.skymavis.com/regional-servers' target='_blank'>
                <Styled.FloatButtonWrapper>
                    <Styled.DiscordLogo src={Discord} alt='Discord'/>

                    <Styled.TextContainer>
                        <p>Confused?</p>
                        <h2>Meet the <br/>Community</h2>
                    </Styled.TextContainer>
                </Styled.FloatButtonWrapper>
            </Link>
        </>
  )
}

export default FloatButton;