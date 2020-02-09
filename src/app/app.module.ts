import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GetDataService } from './services/getData/get-data.service';
import { GetFakeCommentsService } from './services/getFakeComments/get-fake-comments.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { StoreComponent } from './components/store/store.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user', component: UserPanelComponent },
  { path: 'posts/:id', component: ProductComponent },
  { path: 'store', component: StoreComponent, data: { title: 'SpaceTraveler' } },
  { path: '', redirectTo: 'store', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    AboutComponent,
    StoreComponent,
    ContactComponent,
    UserPanelComponent,
    PageNotFoundComponentComponent,
    ProductComponent,
    ProductDescriptionComponent,
    CommentsComponent,
    AddCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule ,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
      ),
      HttpClientModule
    ],
  providers: [
    GetDataService,
    GetFakeCommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
