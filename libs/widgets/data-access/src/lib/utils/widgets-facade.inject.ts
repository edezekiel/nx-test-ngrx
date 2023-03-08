import { inject } from '@angular/core';
import { WidgetsFacade } from '@nx-test-ngrx/widgets/data-access';

export const widgetsFacadeInjector = (): WidgetsFacade => {
  return inject(WidgetsFacade);
};
