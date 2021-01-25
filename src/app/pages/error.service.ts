import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor() {}
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unkown Error';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status} \n Message: ${error.statusText}`;
    }
    return throwError(errorMessage);
  }
  check(errorMessage) {
    console.log(errorMessage);
  }
}
