import React, { Component } from 'react';

interface IProps {
    toggle?: () => void;
    property: string;
}

class PropertyComponent extends Component<IProps> {
    render() {
        const { toggle, property } = this.props;
        return (
            <span onClick={toggle} className={`${toggle ? 'clickable ' : ''}property`}>
                {property}
            </span>
        );
    }
}

export default PropertyComponent;
