import { UiToolbarModule } from './libs/ui-toolbar/ui-toolbar.module';
import { environment } from './../environments/environment';
import { MaterialModule } from './libs/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f209966492fda3ae13a1251bfd200bd774018104
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { WallModule } from './wall/wall.module';
import { ProfileModule } from './profile/profile.module';
import { PostFormComponent } from './components/posts/post-form/post-form.component';

@NgModule({
<<<<<<< HEAD
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent
  ],
=======

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { WallModule } from './wall/wall.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [AppComponent],
>>>>>>> eb966cc7b230c18e820c9b23710485b79f726e3a
=======
  declarations: [AppComponent, PostFormComponent],
>>>>>>> f209966492fda3ae13a1251bfd200bd774018104
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
<<<<<<< HEAD
    AngularFireAuthModule,
    AngularFirestoreModule,
<<<<<<< HEAD
=======
>>>>>>> f209966492fda3ae13a1251bfd200bd774018104
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    FlexLayoutModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule
=======
    UiToolbarModule
>>>>>>> eb966cc7b230c18e820c9b23710485b79f726e3a
=======
    AngularFireStorageModule,
    UiToolbarModule

>>>>>>> f209966492fda3ae13a1251bfd200bd774018104
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[PostFormComponent],
})
export class AppModule {}
