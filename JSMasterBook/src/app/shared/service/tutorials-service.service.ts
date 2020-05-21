import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, filter } from 'rxjs/operators';
import { Tutorial } from '../models/tutorial';

@Injectable({
  providedIn: 'root'
})
export class TutorialsServiceService {
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:align
  getTutorial(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>('../../../assets/tutorials.json').pipe(retry(1), catchError(this.handleError));
  }

  getTutorialById(id: number): Observable<Tutorial> {
    return this.http.get<Tutorial>('../../../assets/tutorials.json').pipe(filter(val => val.id === id));
  }


  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
