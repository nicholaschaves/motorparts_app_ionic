import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelmetsPage } from './helmets';

@NgModule({
  declarations: [
    HelmetsPage,
  ],
  imports: [
    IonicPageModule.forChild(HelmetsPage),
  ],
})
export class HelmetsPageModule {}
