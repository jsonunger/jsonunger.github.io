import React, { Component } from 'react';
import ArrayComponent from './ArrayComponent';
import PrimitiveComponent from './PrimitiveComponent';
import { IComponentProps } from './types';
import PropertyComponent from './PropertyComponent';
import ToggleComponent from './ToggleComponent';
import { List, ListItem, Italic } from './components';
import getTypeOf from './getTypeOf';

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
        const { value, property, title, comma } = this.props;
        Object.keys(value).forEach((prop, i, arr) => {
            let val = value[prop];
            let valType = getTypeOf(val);
            let comp;
            if (valType === 'array') {
                comp = <ArrayComponent value={val as any[]} property={prop} comma={i !== arr.length - 1} />;
            } else if (valType === 'object') {
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
            subComponents.push(<ListItem key={i}>{comp}</ListItem>);
        });

        return (
            <div>
                {property ? <PropertyComponent onClick={this.toggle} property={property} /> : null}
                {property ? ':' : null}
                <ToggleComponent showExpandIcon={!this.state.show} onClick={this.toggle} /> {'\u007b'}{' '}
                {this.state.show ? <List>{subComponents}</List> : <Italic onClick={this.toggle}>{title}</Italic>}{' '}
                {'\u007d'}
                {comma ? ',' : null}
            </div>
        );
    }
}

export default ObjectComponent;
