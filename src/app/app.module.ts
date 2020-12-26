import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './view/summary/summary.component';
import { InquiryComponent } from './view/inquiry/inquiry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MMLMaterialModule } from './lib/mml-material/mmlmaterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './view/common-component/banner/banner.component';
import { ToolbarComponent } from './view/common-component/toolbar/toolbar.component';
import { AboutUsComponent } from './view/about-us/about-us.component';
import { DataSectionComponent } from './view/common-component/data-section/data-section.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';
import { MmlAgmModule } from './lib/mml-agm/mml-agm.module';
import { MmlAgmComponent } from './lib/mml-agm/mml-agm.component';


@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    InquiryComponent,
    BannerComponent,
    ToolbarComponent,
    DataSectionComponent,
    AboutUsComponent,
  ],
  entryComponents: [
    MmlAgmComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    TransferHttpCacheModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MMLMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsAPIKey
    }),
    MmlAgmModule
  ],
  providers: [],
  exports: []
})
export class AppModule { }
