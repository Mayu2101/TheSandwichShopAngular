import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { SizeListComponent } from './size-list/size-list.component';
import { SizeEditComponent } from './size-edit/size-edit.component';
import { ToppingListComponent } from './topping-list/topping-list.component';
import { ToppingEditComponent } from './topping-edit/topping-edit.component';
import { BreadListComponent } from './bread-list/bread-list.component';
import { BreadEditComponent } from './bread-edit/bread-edit.component';
import { ComboListComponent } from './combo-list/combo-list.component';
import { ComboEditComponent } from './combo-edit/combo-edit.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ItemListComponent,
    ItemEditComponent,
    SizeListComponent,
    SizeEditComponent,
    ToppingListComponent,
    ToppingEditComponent,
    BreadListComponent,
    BreadEditComponent,
    ComboListComponent,
    ComboEditComponent
  ],
  imports: [
    ProductsRoutingModule,
    SharedModule 
  ]
})
export class ProductsModule { }
