import React from 'react';

export type PreviousState<T> = (previousState: T) => T;

export type StateProps<T> = T | PreviousState<T>;

export type StateCallback<S> = (updatedState: S) => void;

/**
 * Author: https://stackoverflow.com/a/61842546
 */
export function useStateCallback<T>(
  initialState: T
): [T, (state: StateProps<T>, cb?: StateCallback<T>) => void] {
  const [state, setState] = React.useState(initialState);
  const cbRef = React.useRef<StateCallback<T> | undefined>(undefined); // init mutable ref container for callbacks

  const setStateCallback = React.useCallback((state: StateProps<T>, cb?: StateCallback<T>) => {
    cbRef.current = cb; // store current, passed callback in ref
    setState(state);
  }, []); // keep object reference stable, exactly like `useState`

  React.useEffect(() => {
    // cb.current is `undefined` on initial render,
    // so we only invoke callback on state *updates*
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = undefined; // reset callback after execution
    }
  }, [state]);

  return [state, setStateCallback];
}
