import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs';
import { WidgetsDataService } from '../services/widgets-data.service';
import * as WidgetsActions from './widgets.actions';
import { WidgetsEntity } from './widgets.models';

@Injectable()
export class WidgetsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WidgetsActions.initWidgets),
      fetch({
        run: (action) =>
          this._widgetsService
            .all()
            .pipe(
              map((widgets: WidgetsEntity[]) =>
                WidgetsActions.loadWidgetsSuccess({ widgets })
              )
            ),
        onError: (action, error) => {
          return WidgetsActions.loadWidgetsFailure({ error });
        },
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly _widgetsService: WidgetsDataService
  ) {}
}
