import { Link, NavLink } from 'react-router-dom';
import * as Styled from './Header.styled';
import { AppBar, Button } from '@mui/material';
import Logo from '../../assets/logo/axie-infinity-logo.png'
import { MoreButtonData, NavbarData } from './Header.data';
import ArrowDownIcon from '../../assets/icon-component/arrow-down.svg';

const Header = () => {
  return (
    <AppBar
      component='header'
      elevation={4}
      position='fixed'
      sx={{}}
    >
      <Styled.NavbarWrapper>
        <Styled.NavbarContainer>
          <Link to={'/'}>
            <Styled.LogoContainer>
              <Styled.Logo src={Logo} />
            </Styled.LogoContainer>
          </Link>

          <Styled.NavbarList>
            {NavbarData.map((data) => (
              <Link to={data.to} key={data.key} target='_blank'>
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


        </Styled.NavbarContainer>

        <Link
          to='https://welcome.skymavis.com/download'
          target='_blank'
        >
          <Button>Play for Free</Button>
        </Link>
      </Styled.NavbarWrapper>
    </AppBar>
  )
}

export default Header;