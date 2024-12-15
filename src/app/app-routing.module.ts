import { PageNotFoundComponent } from './Shared/components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./Modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./Modules/user/user.module').then(
        (m) => m.UserModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./Modules/user/user.module').then(
        (m) => m.UserModule
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
