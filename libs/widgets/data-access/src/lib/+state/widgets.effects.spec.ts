import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { firstValueFrom, Observable, of, throwError } from 'rxjs';
import { WidgetsDataService } from '../services/widgets-data.service';
import * as WidgetsActions from './widgets.actions';
import { WidgetsEffects } from './widgets.effects';

describe('WidgetsEffects', () => {
  let actions: Observable<Action>;
  let effects: WidgetsEffects;
  let allWidgetsSpy: jest.Mock<any, any>;

  beforeEach(() => {
    allWidgetsSpy = jest.fn();

    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        WidgetsEffects,
        { provide: WidgetsDataService, useValue: { all: allWidgetsSpy } },
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(WidgetsEffects);
  });

  describe('init$', () => {
    it('should return loadWidgetsSuccess', async () => {
      // Arrange
      const widgets = [{ id: 1, name: 'Widget 01' }];
      allWidgetsSpy.mockReturnValue(of(widgets));
      const expected = WidgetsActions.loadWidgetsSuccess({ widgets });

      // Act
      actions = of(WidgetsActions.initWidgets());

      // Await
      const result = await firstValueFrom(effects.init$);

      // Assert
      expect(allWidgetsSpy).toBeCalled();
      expect(result).toEqual(expected);
    });
    it('should return loadWidgetsFailure', async () => {
      // Arrange
      const error = 'Failed to load widgets';
      allWidgetsSpy.mockReturnValue(throwError(() => error));
      const expected = WidgetsActions.loadWidgetsFailure({ error });

      // Act
      actions = of(WidgetsActions.initWidgets());

      // Await
      const result = await firstValueFrom(effects.init$);

      // Assert
      expect(allWidgetsSpy).toBeCalled();
      expect(result).toEqual(expected);
    });
    it('should return loadWidgetsFailure (using .toPromise)', async () => {
      // Arrange
      const error = 'Failed to load widgets';
      allWidgetsSpy.mockReturnValue(throwError(() => error));
      const expected = WidgetsActions.loadWidgetsFailure({ error });

      // Act
      actions = of(WidgetsActions.initWidgets());

      // Await
      const result = await effects.init$.toPromise();

      // Assert
      expect(allWidgetsSpy).toBeCalled();
      expect(result).toEqual(expected);
    });
  });
});
