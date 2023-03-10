import { WidgetsFacade } from '@nx-test-ngrx/widgets/data-access';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { classWithProviders } from './class-with-providers.util';
import { HomeComponent, MyDirective, MyService } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let facadeMock: Partial<WidgetsFacade>;
  let service: MyService;
  let directive: MyDirective;

  beforeEach(() => {
    facadeMock = {
      init: jest.fn(),
      loaded$: new BehaviorSubject<boolean>(false),
    };
    component = classWithProviders({
      token: HomeComponent,
      providers: [{ provide: WidgetsFacade, useValue: facadeMock }],
    });
    service = classWithProviders({
      token: MyService,
      providers: [{ provide: WidgetsFacade, useValue: facadeMock }],
    });
    directive = classWithProviders({
      token: MyDirective,
      providers: [{ provide: WidgetsFacade, useValue: facadeMock }],
    });
  });

  it('component should create', () => {
    expect(component).toBeTruthy();
  });
  it('service should create', () => {
    expect(service).toBeTruthy();
  });
  it('directive should create', () => {
    expect(directive).toBeTruthy();
  });
  it('ngOnInit() should invoke facade.init', () => {
    // Act
    component.ngOnInit();
    // Assert
    expect(facadeMock.init).toBeCalled();
  });
  it('init() should invoke facade.init', () => {
    // Act
    directive.init();
    // Assert
    expect(facadeMock.init).toBeCalled();
  });
  it('init() should invoke facade.init', () => {
    // Act
    service.init();
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
