import React, { FC } from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import ObjectComponent from './ObjectComponent';

import resume from './resume.json';

const ResumeWrapper = styled.div`
    margin: 8px;

    @media (max-width: 767px) {
        margin-right: 12px;
    }
`;

const App: FC = () => (
    <div className="row">
        <ResumeWrapper>
            <ObjectComponent value={resume} open={true} title="Jason's JSON Resume" />
        </ResumeWrapper>
        <Footer />
    </div>
);

export default App;
