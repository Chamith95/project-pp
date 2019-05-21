import { UiToolbarModule } from './libs/ui-toolbar/ui-toolbar.module';
import { environment } from './../environments/environment';
import { MaterialModule } from './libs/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
  declarations: [AppComponent, PostFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    UiToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[PostFormComponent],
})
export class AppModule {}
