import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WidgetsEntity } from '../+state/widgets.models';

@Injectable({
  providedIn: 'root',
})
export class WidgetsDataService {
  private readonly widgetsUrl = 'api/widgets';

  constructor(private readonly _http: HttpClient) {}
  
  getWidgets(): Observable<WidgetsEntity[]> {
    return this._http.get<WidgetsEntity[]>(this.widgetsUrl);
  }
}
