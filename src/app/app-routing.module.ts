import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { IsUserLoggedInGuard } from './models/isuser-loggedin.guard';
import { NotFondComponent } from './not-fond/not-fond.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./_products/products.module').then((x) => x.ProductsModule),
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
    canActivate: [IsUserLoggedInGuard]
  },
  {
    path: '**',
    component: NotFondComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
