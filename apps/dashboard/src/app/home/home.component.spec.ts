import { Injector } from '@angular/core';
import { WidgetsFacade } from '@nx-test-ngrx/widgets/data-access';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { HomeComponent } from './home.component';

// jest.mock('@nx-test-ngrx/widgets/data-access');

// (widgetsFacadeInjector as jest.Mock).mockImplementation(() => ({
//   init: jest.fn(),
// }));

describe('HomeComponent', () => {
  let component: HomeComponent;
  let facadeMock: Partial<WidgetsFacade>;
  let injector: Injector;

  beforeEach(() => {
    facadeMock = {
      init: jest.fn(),
      loaded$: new BehaviorSubject<boolean>(false),
    };
    injector = Injector.create({
      providers: [
        { provide: WidgetsFacade, useValue: facadeMock },
        { provide: HomeComponent, deps: [WidgetsFacade] },
      ],
    });
    component = injector.get(HomeComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('ngOnInit() should invoke facade.init', () => {
    // Act
    component.ngOnInit();
    // Assert
    expect(component['_widgetsFacade'].init).toBeCalled();
  });
  it('loaded$ should default to false', async () => {
    // Await
    const result = await firstValueFrom(component.loaded$);
    // Assert
    expect(result).toBe(false);
  });
});
