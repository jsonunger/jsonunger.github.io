import React, { FC, useState } from 'react';
import { IComponentProps } from './types';
import ObjectComponent from './ObjectComponent';
import PrimitiveComponent from './PrimitiveComponent';
import PropertyComponent from './PropertyComponent';
import ToggleComponent from './ToggleComponent';
import { List, ListItem, Italic } from './components';

type Props = IComponentProps<any[]>;

const ArrayComponent: FC<Props> = ({ value, property, comma }) => {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => setIsShowing(!isShowing);

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
        <>
            {property ? <PropertyComponent onClick={toggle} property={property} /> : null}
            {property ? ':' : null}
            {!!value.length && <ToggleComponent showExpandIcon={!isShowing} onClick={toggle} />} {'\u005b'}{' '}
            {isShowing ? (
                <List>{subComponents}</List>
            ) : value.length ? (
                <Italic onClick={toggle}>{itemNames.length ? itemNames.join(', ') : '...'}</Italic>
            ) : null}{' '}
            {'\u005d'}
            {comma ? ',' : null}
        </>
    );
};

export default ArrayComponent;
