import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { Dashboard } from '../interfaces/dashboard';
import { HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private API_URL = environment.api;

  constructor(private http: HttpClient) { }

  getAllDashboardData(): Observable<Dashboard> {
    return this.http.get<Dashboard>(this.API_URL).pipe(catchError((err: any) => throwError('An error occurred while fetching dashboard data.')));
  }
}
