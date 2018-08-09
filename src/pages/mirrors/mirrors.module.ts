import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MirrorsPage } from './mirrors';

@NgModule({
  declarations: [
    MirrorsPage,
  ],
  imports: [
    IonicPageModule.forChild(MirrorsPage),
  ],
})
export class MirrorsPageModule {}
