import * as WidgetsActions from './lib/+state/widgets.actions';

import * as WidgetsFeature from './lib/+state/widgets.reducer';

import * as WidgetsSelectors from './lib/+state/widgets.selectors';

export * from './lib/+state/widgets.facade';

export * from './lib/+state/widgets.models';

export { WidgetsActions, WidgetsFeature, WidgetsSelectors };
export * from './lib/widgets-data-access.module';

export { widgetsFacadeInjector} from './lib/utils/widgets-facade.inject'