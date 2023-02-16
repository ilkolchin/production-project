import { AppDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';
import type {
  StateSchema,
  ReduxStoreWithManager,
  ThunkConfig,
  StateSchemaKey
} from './config/StateSchema';

export { StoreProvider, createReduxStore };

export type {
  AppDispatch,
  StateSchema,
  ReduxStoreWithManager,
  ThunkConfig,
  StateSchemaKey
};
