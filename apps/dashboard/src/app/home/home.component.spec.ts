import {
  Injector,
  ProviderToken,
  StaticProvider,
  Type,
  ValueProvider
} from '@angular/core';
import { WidgetsFacade } from '@nx-test-ngrx/widgets/data-access';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { HomeComponent } from './home.component';

export const provideDependencies = <T>(config: {
  token: Type<T>;
  providers: StaticProvider[];
}): T => {
  const { providers, token } = config;
  if (!providers.length) {
    return new token();
  } else {
    const deps: ProviderToken<any>[] = [];
    providers.forEach((p) => {
      if (isValueProvider(p)) {
        deps.push(p.provide);
      }
    });
    const tokenWithDependencies = { provide: token, deps };
    const injector = Injector.create({
      providers: [...providers, tokenWithDependencies],
    });
    return injector.get(token);
  }
};

const isValueProvider = (
  provider: StaticProvider
): provider is ValueProvider => {
  return (provider as ValueProvider).provide !== undefined;
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let facadeMock: Partial<WidgetsFacade>;

  beforeEach(() => {
    facadeMock = {
      init: jest.fn(),
      loaded$: new BehaviorSubject<boolean>(false),
    };
    component = provideDependencies<HomeComponent>({
      token: HomeComponent,
      providers: [{ provide: WidgetsFacade, useValue: facadeMock }],
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('ngOnInit() should invoke facade.init', () => {
    // Act
    component.ngOnInit();
    // Assert
    expect(facadeMock.init).toBeCalled();
  });
  it('loaded$ should default to false', async () => {
    // Await
    const result = await firstValueFrom(component.loaded$);
    // Assert
    expect(result).toBe(false);
  });
});
