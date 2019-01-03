import React, { Component } from 'react';
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

class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <FooterContent>
                    <FooterText>
                        Made using <Link href="https://facebook.github.io/create-react-app">Create React App</Link>. The
                        repo is available on <Link href="https://github.com/jsonunger/jsonunger.github.io">GitHub</Link>
                        . View my resume on <Link href="http://bit.ly/jsonunger-resume">Dropbox</Link>.
                    </FooterText>
                </FooterContent>
            </FooterWrapper>
        );
    }
}

export default Footer;
