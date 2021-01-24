import { tap, catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeworkContent } from './homework-content';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeworkContentService {


  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private homeworkURL = environment.homeworkUrl;

  constructor(private http: HttpClient) { }

  getHomeworkContent(accessCodes: string[]): Observable<HomeworkContent[]> {
    return this.http.post<HomeworkContent[]>(this.homeworkURL,
                          this.toHomeworkRqBody(accessCodes),
                          this.httpOptions
                        )
      .pipe(
        tap(_ => console.log('sent homework-content request')),
        catchError(err => {
          console.log('sending email failed');
          throw new Error('sending email failed');
        }),
    );
  }

  toHomeworkRqBody(accessCodes: string[]): any {
    return {
      'accessCodes': accessCodes
    }
  }
}
