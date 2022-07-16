import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as WidgetsActions from './widgets.actions';
import { WidgetsEntity } from './widgets.models';

export const WIDGETS_FEATURE_KEY = 'widgets';

export interface WidgetsState extends EntityState<WidgetsEntity> {
  selectedId?: string | number; // which Widgets record has been selected
  loaded: boolean; // has the Widgets list been loaded
  error?: string | null; // last known error (if any)
}

export interface WidgetsPartialState {
  readonly [WIDGETS_FEATURE_KEY]: WidgetsState;
}

export const widgetsAdapter: EntityAdapter<WidgetsEntity> =
  createEntityAdapter<WidgetsEntity>();

export const initialWidgetsState: WidgetsState = widgetsAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const reducer = createReducer(
  initialWidgetsState,
  on(WidgetsActions.initWidgets, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(WidgetsActions.loadWidgetsSuccess, (state, { widgets }) =>
    widgetsAdapter.setAll(widgets, { ...state, loaded: true })
  ),
  on(WidgetsActions.loadWidgetsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function widgetsReducer(
  state: WidgetsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
