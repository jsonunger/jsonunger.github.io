import React, { SFC } from 'react';
import ArrayComponent from './ArrayComponent';
import PrimitiveComponent from './PrimitiveComponent';
import { IComponentProps } from './types';
import PropertyComponent from './PropertyComponent';
import ToggleComponent from './ToggleComponent';
import { List, ListItem, Italic } from './components';
import getTypeOf from './getTypeOf';
import { WithToggleProps, withToggle } from './hoc/withToggle';
import { compose, lifecycle } from 'recompose';

interface IProps extends IComponentProps<Record<string, any>> {
    open?: boolean;
    title?: string;
}

const ObjectComponentClass: SFC<IProps & WithToggleProps> = ({ value, property, title, comma, toggle, isShowing }) => {
    let subComponents: JSX.Element[] = [];
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
            {property ? <PropertyComponent onClick={toggle} property={property} /> : null}
            {property ? ':' : null}
            <ToggleComponent showExpandIcon={!isShowing} onClick={toggle} /> {'\u007b'}{' '}
            {isShowing ? <List>{subComponents}</List> : <Italic onClick={toggle}>{title}</Italic>} {'\u007d'}
            {comma ? ',' : null}
        </div>
    );
};

const ObjectComponent = compose<IProps & WithToggleProps, IProps>(
    withToggle<IProps & WithToggleProps>(),
    lifecycle<IProps & WithToggleProps, {}>({
        componentWillMount() {
            const { open, property, show } = this.props;
            if (open || property === 'about') show();
        },
    }),
)(ObjectComponentClass);

export default ObjectComponent;
