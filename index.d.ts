import * as b from 'bobril';
import { IState, bootstrap as funBootstrap, debugCallbackType } from 'fun-model';

export {
ICursor,
ICursorFactory,
IState,
getState,
setState,
rootCursor,
shallowCopy,
IAction,
createAction,
createActions,
IAsyncAction,
createAsyncAction,
debugCallbackType
} from 'fun-model';

export * from './src/component';
export * from './src/routeComponent';
export * from './src/dataComponent';

export declare let bootstrap: (defaultState: IState, debugCallback?: debugCallbackType, subStateSeparator?: string) => void;
