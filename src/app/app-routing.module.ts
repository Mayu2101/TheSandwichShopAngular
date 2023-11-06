import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { OtpComponent } from './public/otp/otp.component';
import { RegisterComponent } from './public/register/register.component';

const routes: Routes = [
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'otp', component:OtpComponent},
  {
    path: 'shift',
    loadChildren: () => import('./feature/shift/shift.module').then(m => m.ShiftModule),
  },
  {
    path: 'order',
    loadChildren: () => import('./feature/order/order.module').then(m => m.OrderModule),
  },
  {
    path: 'products',
    loadChildren: () => import('./feature/products/products.module').then(m => m.ProductsModule),
  },
  {path: '', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
