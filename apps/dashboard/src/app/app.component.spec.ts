import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
     // declarations: [AppComponent, HomeComponent],
      providers: [AppComponent, HomeComponent] // if you move it here it just treats it as a TS class, ignores DOM
    })
  }); // even if you don't compile HomeComponent TestBed still imports those modules
  // NO_ERRORS_SCHEMA // CUSTOM_ELEMENTS_SCHEMA - still need to mock injectable dependencies
    // of you component with this flag

  it('should create the app', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    const app = TestBed.inject(AppComponent)
    expect(app).toBeTruthy();
  });
});
