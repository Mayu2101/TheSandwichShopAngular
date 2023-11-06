import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShiftComponent } from './shift.component';
import { ShiftListComponent } from './shift-list/shift-list.component';
import { ShiftEditComponent } from './shift-edit/shift-edit.component';

const routes: Routes = [
    {
        path: '', component: ShiftComponent, children: [
            { path: 'list', component: ShiftListComponent },
            { path: 'edit/:id', component: ShiftEditComponent },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShiftRoutingModule{ }

