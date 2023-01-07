import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { WidgetsEffects } from './+state/widgets.effects';
import { WidgetsFacade } from './+state/widgets.facade';
import * as fromWidgets from './+state/widgets.reducer';

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
