import React, { FC } from 'react';
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

const PropertyComponent: FC<IProps> = ({ property, ...props }) => (
    <PropertyComponentWrapper {...props}>{property}</PropertyComponentWrapper>
);

export default PropertyComponent;
