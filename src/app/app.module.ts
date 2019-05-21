import { UiToolbarModule } from './libs/ui-toolbar/ui-toolbar.module';
import { environment } from './../environments/environment';
import { MaterialModule } from './libs/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MatInputModule, MatToolbarModule, MatButtonModule, MatCardModule, MatGridTile, MatGridList, MatGridListModule } from '@angular/material';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//component
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';

// material
import {MatStepperModule} from '@angular/material/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
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
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
<<<<<<< HEAD
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule
=======
    UiToolbarModule
>>>>>>> eb966cc7b230c18e820c9b23710485b79f726e3a
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
