import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GetDataService } from './services/getData/get-data.service';
import { GetFakeCommentsService } from './services/getFakeComments/get-fake-comments.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';


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
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { GetFirebaseDataService } from './services/get-firebase-data.service';
import { FooterComponent } from './components/footer/footer.component';

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
    AddCommentComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule ,
    AppRoutingModule,
      HttpClientModule
    ],
  providers: [
    GetDataService,
    GetFakeCommentsService,
    GetFirebaseDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
