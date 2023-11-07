import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { SizeListComponent } from './size-list/size-list.component';
import { SizeEditComponent } from './size-edit/size-edit.component';
import { ComboListComponent } from './combo-list/combo-list.component';
import { ComboEditComponent } from './combo-edit/combo-edit.component';
import { ToppingListComponent } from './topping-list/topping-list.component';
import { ToppingEditComponent } from './topping-edit/topping-edit.component';
import { BreadListComponent } from './bread-list/bread-list.component';
import { BreadEditComponent } from './bread-edit/bread-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      { path: 'item', component: ItemListComponent },
      { path: 'item/:id', component: ItemEditComponent },
      { path: 'size', component: SizeListComponent },
      { path: 'size/:id', component: SizeEditComponent },
      { path: 'topping', component: ToppingListComponent },
      { path: 'topping/:id', component: ToppingEditComponent },
      { path: 'bread', component: BreadListComponent },
      { path: 'bread/:id', component: BreadEditComponent },
      { path: 'combo', component: ComboListComponent },
      { path: 'combo/:id', component: ComboEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
