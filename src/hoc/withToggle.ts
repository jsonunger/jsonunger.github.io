import { withState, compose, withHandlers } from 'recompose';
import { Omit } from '../types';

interface IWithState {
    isShowing: boolean;
    toggleIsShowing: (state: boolean | ((innerState: boolean) => boolean)) => boolean;
}

interface IWithHandlers {
    show: (e?: React.MouseEvent<HTMLElement>) => boolean;
    hide: (e?: React.MouseEvent<HTMLElement>) => boolean;
    toggle: (e?: React.MouseEvent<HTMLElement>) => boolean;
}

export type WithToggleProps = Omit<IWithState, 'toggleIsShowing'> & IWithHandlers;

export const withToggle = <T extends WithToggleProps>() =>
    compose<T, Omit<T, keyof WithToggleProps>>(
        withState('isShowing', 'toggleIsShowing', false),
        withHandlers<IWithState, IWithHandlers>({
            show: ({ toggleIsShowing }) => (_e?: React.MouseEvent<HTMLElement>) => toggleIsShowing(true),
            hide: ({ toggleIsShowing }) => (_e?: React.MouseEvent<HTMLElement>) => toggleIsShowing(false),
            toggle: ({ toggleIsShowing }) => (_e?: React.MouseEvent<HTMLElement>) => toggleIsShowing(state => !state),
        }),
    );
