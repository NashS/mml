import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
         MatToolbarModule,
         MatButtonModule,
         MatIconModule,
         MatIconRegistry,
         MatFormFieldModule,
         MatInputModule,
         MatCardModule,
         MatSidenavModule,
         MatListModule
        } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import {TextFieldModule} from '@angular/cdk/text-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    TextFieldModule
  ],
  providers: [
    MatIconRegistry
  ]
})
export class MMLMaterialModule {
  constructor(private domSanitizer: DomSanitizer, public matIconRegistry: MatIconRegistry) {
    matIconRegistry.addSvgIcon('metronome', domSanitizer.bypassSecurityTrustResourceUrl('assets/images/metronome.svg'));
    matIconRegistry.registerFontClassAlias( 'fa' );
    matIconRegistry.setDefaultFontSetClass( 'fa' );
  }
}
