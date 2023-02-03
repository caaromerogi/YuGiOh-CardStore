import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'cards',
    loadChildren: () => import('../app/modules/cards/cards.module').then(c => c.CardsModule)
  },
  {
    path:'login',
    loadChildren: () => import('../app/modules/login/login.module').then(c => c.LoginModule)
  },
  {
    path:'sign-up',
    loadChildren: () => import('../app/modules/sign-up/sign-up.module').then(c => c.SignUpModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
