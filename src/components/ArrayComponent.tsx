import React, { Component, SFC } from 'react';
import { IComponentProps } from './sharedTypes';
import ObjectComponent from './ObjectComponent';
import PrimitiveComponent from './PrimitiveComponent';
import PropertyComponent from './PropertyComponent';
import ToggleComponent from './ToggleComponent';

interface IItemNamesProps {
    names: string[];
    toggle: () => void;
}
const ItemNames: SFC<IItemNamesProps> = ({ names, toggle }) => (
    <em className="clickable" onClick={toggle}>
        {names.length ? names.join(', ') : '...'}
    </em>
);

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
            subComponents.push(<li key={i}>{comp}</li>);
        });

        return (
            <div>
                {property ? <PropertyComponent toggle={this.toggle} property={property} /> : null}
                {property ? ':' : null}
                <ToggleComponent show={!this.state.show} toggle={this.toggle} /> {'\u005b'}{' '}
                {this.state.show ? (
                    <ul className="array collapsible">{subComponents}</ul>
                ) : (
                    <ItemNames names={itemNames} toggle={this.toggle} />
                )}{' '}
                {'\u005d'}
                {comma ? ',' : null}
            </div>
        );
    }
}

export default ArrayComponent;
