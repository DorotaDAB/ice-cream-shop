import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerPanelComponent } from './components/customer/customer-panel/customer-panel.component';
import { OwnerPanelComponent } from './components/owner/owner-panel/owner-panel.component';
import { LoginComponent } from './components/shared/login/login.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'owner',
    component: OwnerPanelComponent,
    // canActivate: [],
  },
  {
    path: 'customer',
    component: CustomerPanelComponent,
    // canActivate: [],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
