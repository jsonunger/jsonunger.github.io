import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from './components';

const FooterWrapper = styled.div`
    background-color: white;
    opacity: 0.95;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-size: 12px;
`;

const FooterContent = styled.footer`
    padding: 8px;
`;

const FooterText = styled.p`
    margin-bottom: 0;
`;

const Footer: FC = () => (
    <FooterWrapper>
        <FooterContent>
            <FooterText>
                Made using <Link href="https://facebook.github.io/create-react-app">Create React App</Link>. The repo is
                available on <Link href="https://github.com/jsonunger/jsonunger.github.io">GitHub</Link>. View my resume
                on{' '}
                <Link href="https://www.dropbox.com/s/pb3xcl1d47dyqib/Jason%20Unger%20-%20Resume.pdf?dl=0">
                    Dropbox
                </Link>
                .
            </FooterText>
        </FooterContent>
    </FooterWrapper>
);

export default Footer;
