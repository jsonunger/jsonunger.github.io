import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    list-style-type: none;
    padding: 0px;
    margin: 0px 0px 0px 24px;
    margin-left: 1.5em;

    @media (min-width: 768px) {
        margin-left: 2em;
    }
`;

export default List;
