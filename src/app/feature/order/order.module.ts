import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { OrderRoutingModule } from './order.routing';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    OrderRoutingModule,
    SharedModule,
  ]
})
export class OrderModule { }
