import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromWidgets from './+state/widgets.reducer';
import { WidgetsEffects } from './+state/widgets.effects';
import { WidgetsFacade } from './+state/widgets.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromWidgets.WIDGETS_FEATURE_KEY,
      fromWidgets.widgetsReducer
    ),
    EffectsModule.forFeature([WidgetsEffects]),
  ],
  providers: [WidgetsFacade],
})
export class WidgetsDataAccessModule {}
