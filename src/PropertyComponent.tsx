import React, { SFC } from 'react';
import styled, { css } from 'styled-components';

const PropertyComponentWrapper = styled.span`
    font-weight: bold;

    ${props =>
        props.onClick &&
        css`
            cursor: pointer;
        `}
`;

interface IProps extends Pick<React.HTMLProps<HTMLSpanElement>, 'onClick'> {
    property: string;
}

const PropertyComponent: SFC<IProps> = ({ property, ...props }) => (
    <PropertyComponentWrapper {...props}>{property}</PropertyComponentWrapper>
);

export default PropertyComponent;
