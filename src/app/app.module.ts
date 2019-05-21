import { UiToolbarModule } from './libs/ui-toolbar/ui-toolbar.module';
import { environment } from './../environments/environment';
import { MaterialModule } from './libs/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



=======

>>>>>>> eb966cc7b230c18e820c9b23710485b79f726e3a
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
<<<<<<< HEAD
import { AngularFireStorageModule } from '@angular/fire/storage';
import { WallModule } from './wall/wall.module';
import { ProfileModule } from './profile/profile.module';
import { PostFormComponent } from './components/posts/post-form/post-form.component';

@NgModule({
  declarations: [AppComponent, PostFormComponent],
=======
import { WallModule } from './wall/wall.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [AppComponent],
>>>>>>> eb966cc7b230c18e820c9b23710485b79f726e3a
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    UiToolbarModule

=======
    UiToolbarModule
>>>>>>> eb966cc7b230c18e820c9b23710485b79f726e3a
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[PostFormComponent],
})
export class AppModule {}
