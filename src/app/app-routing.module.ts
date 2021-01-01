import { HomeworkComponent } from './view/homework/homework.component';
import { AboutUsComponent } from './view/about-us/about-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent } from './view/summary/summary.component';
import { InquiryComponent } from './view/inquiry/inquiry.component';

const routes: Routes = [
  { path: 'summary', component: SummaryComponent, children: []},
  { path: 'aboutUs', component: AboutUsComponent},
  { path: 'inquiry', component: InquiryComponent},
  { path: 'homework', component: HomeworkComponent},
  { path: '', redirectTo: 'summary', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
