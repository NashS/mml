import { Observable, of } from 'rxjs';
import { HomeworkContentService } from './homework-content.service';
import { Component, OnInit, Output } from '@angular/core';
import { HomeworkAddCourseModalComponent } from './homework-add-course-modal/homework-add-course-modal.component';
import { HomeworkContent } from './homework-content';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { filter, switchMap, tap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {

  public homework$: Observable<HomeworkContent[]>;

  constructor(
    private homeworkService: HomeworkContentService,
    private modal: MatDialog) { }

  ngOnInit(): void {
    this.homework$ = this.homeworkService.getLocalHomeworkContent();
  }

  openDialog() {
    const modalRef: MatDialogRef<HomeworkAddCourseModalComponent> = this.modal.open(HomeworkAddCourseModalComponent, {
      maxWidth: '600px'
    });
    modalRef.afterClosed()
      .pipe(
        tap(_ => console.log('piping after modal close')),
        filter(this.closedWithAccessCodes),
        switchMap((result: string[]) => this.homeworkService.getRemoteHomeworkContent(result))
      )
      .subscribe((hw: HomeworkContent[]) => {
        if(hw !== undefined && Array.isArray(hw) && hw.length > 0) {
        this.homework$ = of(hw);
      }});

  }

  private closedWithAccessCodes(result: any): boolean {
    return result !== undefined && Array.isArray(result) && result.length > 0;
  }

}
