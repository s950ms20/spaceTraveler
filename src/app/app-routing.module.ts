import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { StoreComponent } from './components/store/store.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user', component: UserPanelComponent },
  { path: 'posts/:id', component: ProductComponent },
  { path: 'store', component: StoreComponent, data: { title: 'SpaceTraveler' } },
  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegistrationComponent },
  { path: '', redirectTo: 'store', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { onSameUrlNavigation: 'reload' } // <-- debugging purposes only
      ),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

