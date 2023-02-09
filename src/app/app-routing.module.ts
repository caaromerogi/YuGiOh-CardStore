import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const routes: Routes = [

  {
    path:'', redirectTo: 'cards', pathMatch:'full'
  },
  {
    path:'cards',
    loadChildren: () => import('../app/modules/cards/cards.module').then(c => c.CardsModule)
  },
  {
    path:'login',
    ...canActivate(() => redirectLoggedInTo(['cards'])),
    loadChildren: () => import('../app/modules/login/login.module').then(c => c.LoginModule)
  },
  {
    path:'sign-up',
    ...canActivate(() => redirectLoggedInTo(['cards'])),
    loadChildren: () => import('../app/modules/sign-up/sign-up.module').then(c => c.SignUpModule)
  },
  {
    path:'fund',
    ...canActivate(() => redirectUnauthorizedTo(['cards'])),
    loadChildren: () => import('../app/modules/funding/funding.module').then(c => c.FundingModule),
  },
  {
    path:'deck',
    ...canActivate(() => redirectUnauthorizedTo(['cards'])),
    loadChildren: () => import('../app/modules/deck/deck.module').then(c => c.DeckModule),
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
