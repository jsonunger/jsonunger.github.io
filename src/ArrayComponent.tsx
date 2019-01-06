import React, { SFC } from 'react';
import { IComponentProps } from './types';
import ObjectComponent from './ObjectComponent';
import PrimitiveComponent from './PrimitiveComponent';
import PropertyComponent from './PropertyComponent';
import ToggleComponent from './ToggleComponent';
import { List, ListItem, Italic } from './components';
import { withToggle, WithToggleProps } from './hoc/withToggle';

type Props = IComponentProps<any[]> & WithToggleProps;

const ArrayComponentClass: SFC<Props> = ({ value, property, comma, toggle, isShowing }) => {
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
            {property ? <PropertyComponent onClick={toggle} property={property} /> : null}
            {property ? ':' : null}
            <ToggleComponent showExpandIcon={!isShowing} onClick={toggle} /> {'\u005b'}{' '}
            {isShowing ? (
                <List>{subComponents}</List>
            ) : (
                <Italic onClick={toggle}>{itemNames.length ? itemNames.join(', ') : '...'}</Italic>
            )}{' '}
            {'\u005d'}
            {comma ? ',' : null}
        </div>
    );
};

const ArrayComponent = withToggle<Props>()(ArrayComponentClass);
export default ArrayComponent;
