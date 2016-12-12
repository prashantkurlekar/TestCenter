import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ComponentsModule } from '../../components';
import { OptionsPage } from '../assessment';

@NgModule({
  declarations: [],
  imports: [ IonicModule, ComponentsModule ],
  exports: [],
  entryComponents: [ OptionsPage ],
  providers: [],
})
export class PublicSectionModule { }
