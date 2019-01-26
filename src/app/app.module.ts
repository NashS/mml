import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MMLMaterialModule } from './mml-material/mmlmaterial.module';
import { MMLMdbModule } from './mml-mdb/mml-mdb.module';
import { StudioComponent } from './summary/sections/studio/studio.component';
import { AboutMeComponent } from './summary/sections/about-me/about-me.component';
import { TestamonialsComponent } from './summary/sections/testamonials/testamonials.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    InquiryComponent,
    StudioComponent,
    AboutMeComponent,
    TestamonialsComponent
  ],
  entryComponents: [
    StudioComponent,
    AboutMeComponent,
    TestamonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MMLMaterialModule,
    MMLMdbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
