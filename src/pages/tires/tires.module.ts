import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TiresPage } from './tires';

@NgModule({
  declarations: [
    TiresPage,
  ],
  imports: [
    IonicPageModule.forChild(TiresPage),
  ],
})
export class TiresPageModule {}
