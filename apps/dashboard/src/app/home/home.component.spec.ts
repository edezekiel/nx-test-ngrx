import { widgetsFacadeInjector } from '@nx-test-ngrx/widgets/data-access';
import { HomeComponent } from './home.component';

jest.mock('@nx-test-ngrx/widgets/data-access');

(widgetsFacadeInjector as jest.Mock).mockImplementation(() => ({
  init: jest.fn(),
}));

describe('HomeComponent', () => {
  let component: HomeComponent;

  beforeEach(() => {
    component = new HomeComponent();
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
});
