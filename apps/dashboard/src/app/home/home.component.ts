import { Component, OnInit } from '@angular/core';
import { WidgetsFacade } from '@nx-test-ngrx/widgets/data-access';
@Component({
  selector: 'nx-test-ngrx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private readonly _widgetsFacade: WidgetsFacade) {}
  
  ngOnInit() {
    this._widgetsFacade.init();
  }
}
