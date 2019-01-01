import React, { Component, SFC } from 'react';
import { IComponentProps } from './types';
import ObjectComponent from './ObjectComponent';
import PrimitiveComponent from './PrimitiveComponent';
import PropertyComponent from './PropertyComponent';
import ToggleComponent from './ToggleComponent';
import { List, ListItem, Italic } from './components';

type Props = IComponentProps<any[]>;
interface IState {
    show: boolean;
}

class ArrayComponent extends Component<Props, IState> {
    state: IState = {
        show: false,
    };

    toggle = () => {
        this.setState(state => ({
            show: !state.show,
        }));
    };

    render() {
        const { value, property, comma } = this.props;
        let subComponents: JSX.Element[] = [];
        let itemNames: string[] = [];
        value.forEach((val, i, arr) => {
            let compProps = { value: val },
                comp;
            if (Array.isArray(val)) {
                comp = <ArrayComponent {...compProps} comma={i !== arr.length - 1} />;
            } else if (typeof val === 'object') {
                let title = val[Object.keys(val)[0]];
                itemNames.push(title);
                comp = <ObjectComponent {...compProps} comma={i !== arr.length - 1} title={title} />;
            } else {
                comp = <PrimitiveComponent {...compProps} comma={i !== arr.length - 1} />;
            }
            subComponents.push(<ListItem key={i}>{comp}</ListItem>);
        });

        return (
            <div>
                {property ? <PropertyComponent onClick={this.toggle} property={property} /> : null}
                {property ? ':' : null}
                <ToggleComponent showExpandIcon={!this.state.show} onClick={this.toggle} /> {'\u005b'}{' '}
                {this.state.show ? (
                    <List>{subComponents}</List>
                ) : (
                    <Italic onClick={this.toggle}>{itemNames.length ? itemNames.join(', ') : '...'}</Italic>
                )}{' '}
                {'\u005d'}
                {comma ? ',' : null}
            </div>
        );
    }
}

export default ArrayComponent;
