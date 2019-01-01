import React, { Component } from 'react';
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

class PropertyComponent extends Component<IProps> {
    render() {
        const { property, ...props } = this.props;
        return <PropertyComponentWrapper {...props}>{property}</PropertyComponentWrapper>;
    }
}

export default PropertyComponent;
