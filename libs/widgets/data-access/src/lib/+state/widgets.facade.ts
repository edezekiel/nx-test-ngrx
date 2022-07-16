import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as WidgetsActions from './widgets.actions';
import * as WidgetsFeature from './widgets.reducer';
import * as WidgetsSelectors from './widgets.selectors';

@Injectable()
export class WidgetsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(WidgetsSelectors.getWidgetsLoaded));
  allWidgets$ = this.store.pipe(select(WidgetsSelectors.getAllWidgets));
  selectedWidgets$ = this.store.pipe(select(WidgetsSelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(WidgetsActions.initWidgets());
  }
}
