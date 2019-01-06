import React, { SFC } from 'react';
import { IComponentProps } from './types';
import PropertyComponent from './PropertyComponent';
import styled, { css } from 'styled-components';
import getTypeOf from './getTypeOf';
import { Link } from './components';
import { withProps } from 'recompose';

const colorMap: Record<string, string> = {
    string: 'green',
    number: 'blue',
    boolean: 'firebrick',
    null: 'gray',
};
const Value = styled.span<{ value: PossibleValueTypes }>`
    ${props => css`
        color: ${colorMap[getTypeOf(props.value)]};
    `}
`;

const checkIfUrl = (value: string) => {
    return /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})$/i.test(
        value,
    );
};
const checkIfEmail = (value: string) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
        value,
    );
};
const getValue = (value: PossibleValueTypes) => {
    if (typeof value === 'string') {
        let node: React.ReactNode;
        if (checkIfUrl(value)) {
            node = <Link href={value}>{value}</Link>;
        } else if (checkIfEmail(value)) {
            node = <Link href={`mailto:${value}`}>{value}</Link>;
        } else {
            node = value;
        }
        return <span>"{node}"</span>;
    }
    if (value === null) {
        return 'null';
    }
    return value;
};

type PossibleValueTypes = string | number | boolean | null;
type Props = IComponentProps<PossibleValueTypes>;

interface IWithVal {
    val: React.ReactNode;
}
const withVal = withProps<Props & IWithVal, Props>(props => ({
    ...props,
    val: getValue(props.value),
}));

const PrimitiveComponentClass: SFC<Props & IWithVal> = ({ value, property, comma, val }) => (
    <span>
        {property ? <PropertyComponent property={property} /> : null}
        {property ? ':' : null} <Value value={value}>{val}</Value>
        {comma ? ',' : null}
    </span>
);

const PrimitiveComponent = withVal(PrimitiveComponentClass);
export default PrimitiveComponent;