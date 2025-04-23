import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailHomeComponent } from './components/mail-home/mail-home.component';

const routes: Routes = [
  {
    path: '',
    component: MailHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailHomeRoutingModule {}
