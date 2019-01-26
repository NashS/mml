import { EmailService } from './email.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, NgForm} from '@angular/forms';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.scss']
})
export class InquiryComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', []);
  message = new FormControl('', [Validators.required]);
  commentsForm = new FormGroup({
    name: this.name,
    message: this.message,
    email: this.email
  });

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  getErrorMessage(field: FormControl) {
    return field.hasError('required') ? 'Cannot be empty' :
      field.hasError('email') ? 'Not a valid email' :
            '';
  }

  sendEmailConfirmationBox(): void {
  }

  onSubmit() {
    console.log(this.commentsForm.value);
    this.emailService.sendEmail(this.commentsForm.value).pipe(
      finalize(() => {
        this.sendEmailConfirmationBox();
      })
    ).subscribe();
  }

}
