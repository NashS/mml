import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    MatIconRegistry
  ]
})
export class MMLMaterialModule {
  constructor(private domSanitizer: DomSanitizer, public matIconRegistry: MatIconRegistry) {
    matIconRegistry.addSvgIcon('metronome', domSanitizer.bypassSecurityTrustResourceUrl('assets/images/metronome.svg'));
    matIconRegistry.addSvgIcon('evil', domSanitizer.bypassSecurityTrustResourceUrl('assets/images/evil.svg'));
    matIconRegistry.registerFontClassAlias( 'fa' );
    matIconRegistry.setDefaultFontSetClass( 'fa' );
  }
}
