import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { InquiryComponent } from './inquiry/inquiry.component';

const routes: Routes = [
  { path: 'summary', component: SummaryComponent, children: []},
  { path: 'inquiry', component: InquiryComponent},
  { path: '', redirectTo: 'summary', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
