import { Link, useLocation } from 'react-router-dom';
import * as Styled from './Header.styled';
import { AppBar, Button } from '@mui/material';
import Logo from '../../assets/logo/axie-infinity-logo.png'
import { MoreButtonData, NavbarData } from './Header.data';
import ArrowDownIcon from '../../assets/icon-component/arrow-down.svg';
import { theme } from '../../themes';
import { useState } from 'react';
import { Col } from 'antd';
import MobileMenu from '../Mobile/MobileMenu';

const Header = () => {
  const locationPath = useLocation().pathname;
  const [isHovered, setIsHovered] = useState('');

  return (
    <Styled.AppBarStyled
      component='header'
      elevation={4}
      position='fixed'
      sx={{}}
      style={{ zIndex: 100 }}
    >
      <Styled.NavbarWrapper>
        <Styled.NavbarContainer>
          <Link to={'/'}>
            <Styled.LogoContainer>
              <Styled.Logo src={Logo} />
            </Styled.LogoContainer>
          </Link>

          <Col lg={15} md={0} sm={0} xs={0}>
            <Styled.NavbarList>
              {NavbarData.map((data) => (
                <Link
                  to={data.to}
                  key={data.key}
                  target={data.to.includes('http') ? '_blank' : ''}
                  style={{
                    color: data.to === locationPath || isHovered === data.to
                      ? 'white' : `${theme.colors.textLore}`,
                  }}
                  onMouseEnter={() => setIsHovered(data.to)}
                  onMouseLeave={() => setIsHovered('')}
                >
                  {data.label}
                </Link>
              ))}
              <Styled.MoreContainer>
                <p>More</p>
                <img src={ArrowDownIcon} alt='Arrowdown' />
                <Styled.DropdownContainer>
                  {MoreButtonData.map((data) => (
                    <Link to={data.to} key={data.key}>
                      {data.label}
                    </Link>
                  ))}
                </Styled.DropdownContainer>
              </Styled.MoreContainer>
            </Styled.NavbarList>
          </Col>

          <Col lg={0}>
            <MobileMenu />
          </Col>

        </Styled.NavbarContainer>

        <Col lg={4} md={0} sm={0} xs={0}>
          <Link
            to='https://welcome.skymavis.com/download'
            target='_blank'
          >
            <Button>Play for Free</Button>
          </Link>
        </Col>
      </Styled.NavbarWrapper>
    </Styled.AppBarStyled>
  )
}

export default Header;