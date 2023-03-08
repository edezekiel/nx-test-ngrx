import { Injector, ProviderToken, StaticProvider } from '@angular/core';
import { WidgetsFacade } from '@nx-test-ngrx/widgets/data-access';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { HomeComponent } from './home.component';

export const provideDependencies = <T>(config: {
  token: ProviderToken<T>;
  providers: StaticProvider[];
}): T => {
  const { providers, token } = config;
  const injector = Injector.create({ providers });
  return injector.get(token);
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let facadeMock: Partial<WidgetsFacade>;

  beforeEach(() => {
    facadeMock = {
      init: jest.fn(),
      loaded$: new BehaviorSubject<boolean>(false),
    };
    const providers = [
      { provide: WidgetsFacade, useValue: facadeMock },
      { provide: HomeComponent, deps: [WidgetsFacade] },
    ];
    component = provideDependencies<HomeComponent>({
      token: HomeComponent,
      providers,
    });
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
