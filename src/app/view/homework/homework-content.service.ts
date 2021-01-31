import { tap, catchError, map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HomeworkContent, isHomeworkContent } from './homework-content';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class HomeworkContentService {


  private static readonly HOMEWORK_KEY = 'hw';

  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private homeworkURL = environment.homeworkUrl;

  constructor(@Inject(LOCAL_STORAGE) private storageService: StorageService , private http: HttpClient) { }

  getRemoteHomeworkContent(accessCodes: string[]): Observable<HomeworkContent[]> {
    return this.http.post<HomeworkContent[]>(this.homeworkURL,
                          this.toHomeworkRqBody(accessCodes),
                          this.httpOptions
                        )
      .pipe(
        tap(_ => console.log('sent homework-content request')),
        catchError(err => {
          throw new Error('homework-content request failed');
        }),
        tap(res => console.log(`res: ${res}`)),
        map(remoteHomeworkContent => this.concatLocalAndRemoteHomeworkContent(remoteHomeworkContent)),
        tap(concatHomeworkContant => this.storageService.set(HomeworkContentService.HOMEWORK_KEY, concatHomeworkContant))
    );
  }

  getLocalHomeworkContent(): Observable<HomeworkContent[]> {
    return of(this._getLocalHomeworkContent());
  }

  private _getLocalHomeworkContent(): HomeworkContent[] {
    const localHomeworkContent: HomeworkContent[] = this.storageService.get(HomeworkContentService.HOMEWORK_KEY);
    return localHomeworkContent;
  }

  private concatLocalAndRemoteHomeworkContent(remoteHomeworkContent: HomeworkContent[])
  : HomeworkContent[] {
    const concatHomeworkContent = new Map<String, HomeworkContent>();
    remoteHomeworkContent
      .concat(this._getLocalHomeworkContent())
      .filter(isHomeworkContent)
      .forEach(homeworkContent => concatHomeworkContent
        .set(homeworkContent.program, homeworkContent)
      );
    return Array.from(concatHomeworkContent.values());
  }

  private toHomeworkRqBody(accessCodes: string[]): any {
    return {
      'accessCodes': accessCodes
    }
  }

}
