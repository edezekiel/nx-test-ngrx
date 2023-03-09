import {
  Component,
  Directive,
  inject,
  OnInit,
  Injectable,
} from '@angular/core';
import { WidgetsFacade } from '@nx-test-ngrx/widgets/data-access';

@Component({
  selector: 'nx-test-ngrx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private readonly _widgetsFacade: WidgetsFacade = inject(WidgetsFacade);

  loaded$ = this._widgetsFacade.loaded$;
  widgets$ = this._widgetsFacade.allWidgets$;

  ngOnInit() {
    this._widgetsFacade.init();
  }
}

@Injectable()
export class MyService {
  private readonly _widgetsFacade: WidgetsFacade = inject(WidgetsFacade);

  init() {
    return this._widgetsFacade.init();
  }
}

@Directive()
export class MyDirective {
  private readonly _widgetsFacade: WidgetsFacade = inject(WidgetsFacade);

  init() {
    return this._widgetsFacade.init();
  }
}
