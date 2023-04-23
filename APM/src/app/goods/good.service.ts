import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { IGood } from './good';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/*
  This class is about a service running and available from the root of the DOM
*/
export class GoodService {
  private goodUrl = 'api/goods/goods.json';
  /*
    Constructor paramater can be use to declare the variables of the class

  */
  constructor(private http: HttpClient){}
  
  /*
    Return an Observable of goods from a http request that is a good from the good URL
  */
  getGoods(): Observable<IGood[]> {
    return this.http.get<IGood[]>(this.goodUrl).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse){
    // in a real world app, we may send the server to some remote logginf infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occured. Handle it accordingly.
    }
    else{
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
