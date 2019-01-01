import React from 'react';
import styled, { css } from 'styled-components';

const Italic = styled.em`
    ${props =>
        props.onClick &&
        css`
            cursor: pointer;
        `}
`;

export default Italic;
