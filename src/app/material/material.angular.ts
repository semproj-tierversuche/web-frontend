import {
  MatButtonModule, MatCheckboxModule, MatButtonToggleModule, MatTabsModule, MatProgressSpinnerModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatButtonToggleModule, MatTabsModule, MatProgressSpinnerModule],
  exports: [MatButtonModule, MatCheckboxModule, MatButtonToggleModule, MatTabsModule, MatProgressSpinnerModule]
})
export class MaterialAngularModule { }
