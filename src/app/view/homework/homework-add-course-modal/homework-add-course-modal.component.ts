import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-homework-add-course-modal',
  templateUrl: './homework-add-course-modal.component.html',
  styleUrls: ['./homework-add-course-modal.component.scss']
})
export class HomeworkAddCourseModalComponent implements OnInit {

  accessCodes = new FormArray([new FormControl('', [Validators.required])]);
  accessCodesForm = new FormGroup({
    accessCodes: this.accessCodes
  });

  constructor(public dialogRef: MatDialogRef<HomeworkAddCourseModalComponent>) { }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  getErrorMessage(field: FormControl) {
    return field.hasError('required') ? 'Cannot be empty' : '';
  }

  onSubmit() {
    console.log('onSubmit');
    return this.dialogRef.close(this.accessCodes.controls.map(control => control.value));
  }

  addAccessCode() {
    if(this.accessCodes.length <= 3) {
      this.accessCodes.controls.push(new FormControl('', [Validators.required]));
    }
  }

  removeAccessCode() {
    if(this.accessCodes.length > 1) {
      this.accessCodes.controls.pop();
    }
  }

}
