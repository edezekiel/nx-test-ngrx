import { Component, OnInit } from '@angular/core';
import {
  WidgetsFacade,
  widgetsFacadeInjector
} from '@nx-test-ngrx/widgets/data-access';

@Component({
  selector: 'nx-test-ngrx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private readonly _widgetsFacade: WidgetsFacade = widgetsFacadeInjector();

  loaded$ = this._widgetsFacade.loaded$;
  widgets$ = this._widgetsFacade.allWidgets$;

  ngOnInit() {
    this._widgetsFacade.init();
  }
}
