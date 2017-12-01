import {
  MatButtonModule, MatCheckboxModule, MatButtonToggleModule, MatTabsModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatButtonToggleModule, MatTabsModule],
  exports: [MatButtonModule, MatCheckboxModule, MatButtonToggleModule, MatTabsModule]
})
export class MaterialAngularModule { }
