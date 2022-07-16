import { Action } from '@ngrx/store';

import * as WidgetsActions from './widgets.actions';
import { WidgetsEntity } from './widgets.models';
import {
  WidgetsState,
  initialWidgetsState,
  widgetsReducer,
} from './widgets.reducer';

describe('Widgets Reducer', () => {
  const createWidgetsEntity = (id: string, name = ''): WidgetsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Widgets actions', () => {
    it('loadWidgetsSuccess should return the list of known Widgets', () => {
      const widgets = [
        createWidgetsEntity('PRODUCT-AAA'),
        createWidgetsEntity('PRODUCT-zzz'),
      ];
      const action = WidgetsActions.loadWidgetsSuccess({ widgets });

      const result: WidgetsState = widgetsReducer(initialWidgetsState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = widgetsReducer(initialWidgetsState, action);

      expect(result).toBe(initialWidgetsState);
    });
  });
});
