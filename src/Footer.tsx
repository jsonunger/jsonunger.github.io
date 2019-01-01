import React, { Component } from 'react';
import styled from 'styled-components';

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
                        Made using <a href="https://facebook.github.io/create-react-app">Create React App</a>. The repo
                        is available on <a href="https://github.com/jsonunger/jsonunger.github.io">GitHub</a>.
                    </FooterText>
                </FooterContent>
            </FooterWrapper>
        );
    }
}

export default Footer;
