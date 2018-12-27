import React, { Component } from 'react';
import ArrayComponent from './ArrayComponent';
import PrimitiveComponent from './PrimitiveComponent';
import { IComponentProps } from './types';
import PropertyComponent from './PropertyComponent';
import ToggleComponent from './ToggleComponent';

interface IProps extends IComponentProps<Record<string, any>> {
    open?: boolean;
    title?: string;
}
interface IState {
    show: boolean;
}

class ObjectComponent extends Component<IProps, IState> {
    state: IState = {
        show: false,
    };

    toggle = () => {
        this.setState(state => ({
            show: !state.show,
        }));
    };

    componentWillMount() {
        const { open, property } = this.props;
        if (open || property === 'about') this.setState({ show: true });
    }

    render() {
        let subComponents: JSX.Element[] = [];
        if (this.props.value.default) delete this.props.value.default;
        const { value, property, title, comma } = this.props;
        Object.keys(value).forEach((prop, i, arr) => {
            let val = value[prop],
                comp;
            if (Array.isArray(val)) {
                comp = <ArrayComponent value={val as any[]} property={prop} comma={i !== arr.length - 1} />;
            } else if (typeof val === 'object') {
                let objTitle = val[Object.keys(val)[0]];
                comp = (
                    <ObjectComponent
                        value={val as IProps['value']}
                        property={prop}
                        comma={i !== arr.length - 1}
                        title={objTitle}
                    />
                );
            } else {
                comp = <PrimitiveComponent value={val} property={prop} comma={i !== arr.length - 1} />;
            }
            subComponents.push(<li key={i}>{comp}</li>);
        });

        return (
            <div>
                {property ? <PropertyComponent toggle={this.toggle} property={property} /> : null}
                {property ? ':' : null}
                <ToggleComponent show={!this.state.show} toggle={this.toggle} /> {'\u007b'}{' '}
                {this.state.show ? (
                    <ul className="obj collapsible">{subComponents}</ul>
                ) : (
                    <em className="clickable" onClick={this.toggle}>
                        {title}
                    </em>
                )}{' '}
                {'\u007d'}
                {comma ? ',' : null}
            </div>
        );
    }
}

export default ObjectComponent;
