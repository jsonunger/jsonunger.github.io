import React, { Component } from 'react';
import { IComponentProps } from './types';
import PropertyComponent from './PropertyComponent';

type Props = IComponentProps<string | number | boolean>;
class PrimitiveComponent extends Component<Props> {
    checkIfUrl = (value: string) => {
        return /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})$/i.test(
            value,
        );
    };

    checkIfEmail = (value: string) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
            value,
        );
    };

    getValue = (value: string | number | boolean) => {
        if (typeof value === 'string') {
            if (this.checkIfUrl(value)) {
                return (
                    <a href={value} target="_blank">
                        {value}
                    </a>
                );
            }
            if (this.checkIfEmail(value)) {
                return (
                    <a href={`mailto:${value}`} target="_blank">
                        {value}
                    </a>
                );
            }
        }
        return value;
    };

    render() {
        const { value, property, comma } = this.props;

        const val = this.getValue(value);
        return (
            <div>
                {property ? <PropertyComponent property={property} /> : null}
                {property ? ':' : null} <span className={typeof value}>"{val}"</span>
                {comma ? ',' : null}
            </div>
        );
    }
}

export default PrimitiveComponent;
