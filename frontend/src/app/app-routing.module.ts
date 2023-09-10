import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  {path:'', redirectTo: 'products', pathMatch: 'full'},
  {path:'products', component: ProductsComponent},
  {path:'categories', component: CategoriesComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
