import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MMLMaterialModule } from './mmlmaterial/mmlmaterial.module';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    InquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MMLMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
