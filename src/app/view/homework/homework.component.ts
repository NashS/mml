import { Observable } from 'rxjs';
import { HomeworkContentService } from './homework-content.service';
import { Component, OnInit, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HomeworkAddCourseModalComponent } from './homework-add-course-modal/homework-add-course-modal.component';
import { HomeworkContent } from './homework-content';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent {

  public homework$: Observable<HomeworkContent[]>;


  constructor(private cookieService: CookieService,
    private homeworkService: HomeworkContentService,
    private modal: MatDialog) { }

  openDialog() {
    const modalRef: MatDialogRef<HomeworkAddCourseModalComponent> = this.modal.open(HomeworkAddCourseModalComponent, {
      maxWidth: '600px'
    });
    this.homework$ = modalRef.afterClosed()
      .pipe(
        tap(_ => console.log('piping after modal close')),
        switchMap((result: string[]) => this.homeworkService.getHomeworkContent(result))
      );
  }



}
