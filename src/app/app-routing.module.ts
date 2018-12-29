import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { InquiryComponent } from './inquiry/inquiry.component';

const routes: Routes = [
  {path: 'summary', component: SummaryComponent},
  {path: 'inquiry', component: InquiryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
