import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://api.github.com/";
  private user = 'wellingtonMesquita'

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      if(error.status == 404){
        errorMessage = 'Usuario não encontrado!'
      }
       
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public getRepoByUser(user){
    return this.httpClient.get(this.REST_API_SERVER +'users/' + user + '/repos').pipe(retry(3), catchError(this.handleError));
  }
}
