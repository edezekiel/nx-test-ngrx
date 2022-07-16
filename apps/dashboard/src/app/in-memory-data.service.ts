import { Injectable } from '@angular/core';
import { WidgetsEntity } from '@nx-test-ngrx/widgets/data-access';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const widgets = [
      { id: 12, name: 'Widget 01' },
      { id: 13, name: 'Widget 02' },
      { id: 14, name: 'Widget 03' },
      { id: 15, name: 'Widget 04' },
      { id: 16, name: 'Widget 05' },
      { id: 17, name: 'Widget 06' },
      { id: 18, name: 'Widget 07' },
      { id: 19, name: 'Widget 08' },
      { id: 20, name: 'Widget 09' },
    ];
    return { widgets };
  }

  genId(widgets: WidgetsEntity[]): number {
    return widgets.length > 0
      ? Math.max(...widgets.map((widget) => parseInt(`${widget.id}`))) + 1
      : 11;
  }
}
