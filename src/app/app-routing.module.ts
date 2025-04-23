import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mail-home',
    loadChildren: () =>
      import('./views/mail-home/mail-home.module').then(m => m.MailHomeModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./views/login/login.module').then(m => m.LoginModule)
  },

  {
    path: '',
    redirectTo: 'mail-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
