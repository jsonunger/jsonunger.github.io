export interface IComponentProps<V extends any> {
    value: V;
    property?: string;
    comma?: boolean;
}

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
