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
import { isPlatformServer } from '@angular/common';
import { Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';

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
  constructor(@Inject(PLATFORM_ID) private platformId: any, private domSanitizer: DomSanitizer, public matIconRegistry: MatIconRegistry) {
    this.registerIcon('metronome', 'metronome');
    matIconRegistry.registerFontClassAlias( 'fa' );
    matIconRegistry.setDefaultFontSetClass( 'fa' );
  }

  private registerIcon(name: string, filename: string) {
    if (isPlatformServer(this.platformId)) {
      /* Register empty icons for server-side-rendering to prevent errors */
      this.matIconRegistry.addSvgIconLiteral(name, this.domSanitizer.bypassSecurityTrustHtml('<svg></svg>'));
    } else {
      this.matIconRegistry.addSvgIcon(name, this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/images/${filename}.svg`));
    }
  }
}
