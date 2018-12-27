import React, { Component } from 'react';

interface IProps {
    toggle: () => void;
    show: boolean;
}

class ToggleComponent extends Component<IProps> {
    render() {
        const { toggle, show } = this.props;
        return (
            <div className="toggle clickable" onClick={toggle}>
                <strong>{show ? '+' : '-'}</strong>
            </div>
        );
    }
}

export default ToggleComponent;
