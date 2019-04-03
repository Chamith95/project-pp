import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  myControl = new FormControl();
  checked=false;
  // Options for school
  options: string[] = ['Ananda College Colombo', 'Nalanda College Colombo', 'Kingswood College Kandy'];
  filteredOptions: Observable<string[]>;

  constructor(public fa: AngularFireAuth,
    private _formBuilder: FormBuilder
    ) {}

  login() {
    this.fa.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  logout() {
    this.fa.auth.signOut();
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      Admissionctrl:[],
      batchctrl: ['', Validators.required]

    });
    this.secondFormGroup = this._formBuilder.group({
      workCtrl: ['', Validators.required],
      addressCtrl:['',Validators.required]
    });

    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}

