import { NgModule } from '@angular/core';
import { ShiftComponent } from './shift.component';
import { ShiftRoutingModule } from './shift.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShiftListComponent } from './shift-list/shift-list.component';
import { ShiftEditComponent } from './shift-edit/shift-edit.component';



@NgModule({
  declarations: [
    ShiftComponent,
    ShiftListComponent,
    ShiftEditComponent
  ],
  imports: [
    ShiftRoutingModule,
    SharedModule
  ]
})
export class ShiftModule { }
