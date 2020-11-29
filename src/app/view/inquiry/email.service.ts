import { environment } from './../../../environments/environment';
import { CommentsForm } from './comments';
import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private emailURL = environment.emailUrl;
  private toEmails = environment.toEmails;

  constructor(private http: HttpClient) { }

  sendEmail(commentsForm: CommentsForm): Observable<any> {
    console.log(commentsForm);
    if (isDevMode()) {
      return of();
    }
    return this.http.post(this.emailURL,
                          this.toEmailerRqBody(commentsForm),
                          this.httpOptions
                        )
      .pipe(
        tap(_ => console.log('sent email')),
        catchError(err => {
          console.log('sending email failed');
          throw new Error('sending email failed');
      })
    );
  }

  toEmailerRqBody(commentsForm: CommentsForm): object {
    return {
      'toEmails': this.toEmails,
      'subject': 'Milton Music Lessons Comments from: '.concat(
          commentsForm.name.length ? commentsForm.name : 'unspecified user'
        ),
      'message': commentsForm.message.concat('\n\nContact email: ')
                                      .concat(commentsForm.email)
    };
  }
}
