import { EmailService } from './email.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, NgForm} from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { trigger, state, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.scss'],
  animations: [
    trigger('commentsAnimation', [
      transition(':leave', [
/*         style({ opacity: 1 }),
        animate('1s ease-out', style({ opacity: '0' })) */
        query('mat-card, mat-form-field, button', [
          style({opacity: 1, height: '*'}),
          stagger(-250, [
            animate('250ms ease-in', style({opacity: '0', height: '0'}))
          ])
        ])
      ])
    ]),
    trigger('submissionAnimation', [
      transition('* => formClosed', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: '1' }))
      ]),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100s ease-out', style({ opacity: '0' }))
      ])
    ])
  ]
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
  submitted = false;
  submittedAnimationState: 'initial' | 'formClosed';

  isDisabledAnimation = true;

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.submittedAnimationState = 'initial';
  }

  getErrorMessage(field: FormControl) {
    return field.hasError('required') ? 'Cannot be empty' :
      field.hasError('email') ? 'Not a valid email' :
            '';
  }

  sendEmailConfirmationBox(): void {
  }

  onSubmit() {
    this.isDisabledAnimation = false;

    this.emailService.sendEmail(this.commentsForm.value).subscribe();

    this.submitted = true;
  }

  changeAnimationState(event) {
    if (event.triggerName === 'commentsAnimation' && event.toState === 'void') {
      this.submittedAnimationState = 'formClosed';
    }
  }

}
