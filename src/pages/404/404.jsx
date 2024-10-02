import { Button, Typography } from '@mui/material';
import * as Styled from './404.styled';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../../hooks';

const NotFound = () => {
    useDocumentTitle('Page Not Found');
    
    return (
        <Styled.NotFoundWrapper>
            <Styled.NotFoundContainer>
                <Styled.ContentWrapper>
                    <Styled.ContentContainer>
                        <Typography variant='h1'>
                            404
                        </Typography>

                        <Styled.InformationContainer>
                            <Styled.InformationContent>
                                <Typography variant='body2'>
                                    Page not found
                                </Typography>

                                <Typography variant='body2'>
                                    {`You can go back `} <Link to='/'>homepage</Link>
                                    {` or you become part of our growing community`}
                                </Typography>
                            </Styled.InformationContent>

                            <Link 
                                to='https://welcome.skymavis.com/regional-servers'
                                target='_blank'
                            >
                                <Button>Join our Discord</Button>
                            </Link>
                        </Styled.InformationContainer>
                    </Styled.ContentContainer>
                </Styled.ContentWrapper>
            </Styled.NotFoundContainer>
        </Styled.NotFoundWrapper>
    )
}

export default NotFound;