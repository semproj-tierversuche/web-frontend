import {MatButtonModule, MatCheckboxModule, MatButtonToggleModule, MatTabsModule, MatTableModule} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatButtonToggleModule, MatTabsModule, MatTableModule],
  exports: [MatButtonModule, MatCheckboxModule, MatButtonToggleModule, MatTabsModule, MatTableModule],
})
export class MaterialAngularModule { }
