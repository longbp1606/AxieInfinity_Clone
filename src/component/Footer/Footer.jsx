import * as Styled from './Footer.styled';
import Logo from '../../assets/logo/axie-infinity-logo-white.png';
import { Link } from 'react-router-dom';

const FooterData = [
    { key: 1, label: 'Marketplace', to: 'https://app.axieinfinity.com/marketplace' },
    { key: 2, label: 'News', to: 'https://axie.substack.com' },
    { key: 3, label: 'Whitepaper', to: 'https://whitepaper.axieinfinity.com' },
    { key: 4, label: 'Code of Conduct', to: '/code-of-conduct' },
    { key: 5, label: 'Privacy Policy', to: '/privacy-policy' },
    { key: 6, label: 'Terms of use', to: '/terms-of-use' },
]

const Footer = () => {
  return (
    <Styled.FooterWrapper>
        <Styled.LogoContainer>
            <Styled.Logo src={Logo} alt='Axie Infinity Logo'/>
        </Styled.LogoContainer>

        <Styled.NavContainer>
            {FooterData.map((data) => (
                <Link to={data.to} key={data.key} target={data.to.includes('http') ? '_blank' : ''}>
                    {data.label}
                </Link>
            ))}
        </Styled.NavContainer>
    </Styled.FooterWrapper>
  )
}

export default Footer