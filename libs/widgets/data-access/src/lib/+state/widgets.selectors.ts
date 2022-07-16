import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  WIDGETS_FEATURE_KEY,
  WidgetsState,
  widgetsAdapter,
} from './widgets.reducer';

// Lookup the 'Widgets' feature state managed by NgRx
export const getWidgetsState =
  createFeatureSelector<WidgetsState>(WIDGETS_FEATURE_KEY);

const { selectAll, selectEntities } = widgetsAdapter.getSelectors();

export const getWidgetsLoaded = createSelector(
  getWidgetsState,
  (state: WidgetsState) => state.loaded
);

export const getWidgetsError = createSelector(
  getWidgetsState,
  (state: WidgetsState) => state.error
);

export const getAllWidgets = createSelector(
  getWidgetsState,
  (state: WidgetsState) => selectAll(state)
);

export const getWidgetsEntities = createSelector(
  getWidgetsState,
  (state: WidgetsState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getWidgetsState,
  (state: WidgetsState) => state.selectedId
);

export const getSelected = createSelector(
  getWidgetsEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
