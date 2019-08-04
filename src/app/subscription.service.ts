import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from './subscription';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) { }

  getSubscriptions(): Observable<Subscription[]> {
    return this.http.get<Subscription[]>("assets/mock-subs.json");
  }

}
