import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from "@angular/common/http";

const apiAdress = 'http://localhost:8090/';

const api = {
  showScenario: 'showScenario',
  countSteps: 'countSteps'
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root',
})
export class HttpHelper {
  // private http: HttpClient;
  // private handleError : HandleError

  getSteps(http: HttpClient, scenario: string) {
    console.log('scenario @ HttpHelper', scenario);
    console.log(http.post(apiAdress + api.showScenario, JSON.stringify(scenario), httpOptions));
    return (http.post(apiAdress + api.showScenario, JSON.stringify(scenario), httpOptions));
  }

}