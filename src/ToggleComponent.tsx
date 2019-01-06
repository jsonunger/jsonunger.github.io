import React, { SFC } from 'react';
import styled from 'styled-components';

const ToggleComponentWrapper = styled.div`
    padding-right: 8px;
    padding-left: 8px;
    position: absolute;
    top: 1px;
    left: -1.5em;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
`;

interface IProps {
    showExpandIcon: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

const ToggleComponent: SFC<IProps> = ({ showExpandIcon, ...props }) => (
    <ToggleComponentWrapper {...props}>
        <strong>{showExpandIcon ? '+' : '-'}</strong>
    </ToggleComponentWrapper>
);

export default ToggleComponent;
