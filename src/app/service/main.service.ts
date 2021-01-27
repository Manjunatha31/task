import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private apiBaseUrl:string = '/api/v1/'
  constructor(private http: HttpClient) { }
  
  getStates() {
    return this.http.get(`${this.apiBaseUrl}states`);
  }

  getCities(stateId: number) {
    return this.http.get(`${this.apiBaseUrl}states/cities/${stateId}`);
  }
   

}
