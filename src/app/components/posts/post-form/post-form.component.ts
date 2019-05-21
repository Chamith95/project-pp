import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { mimeType } from './mime-type.validator';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  public imagePath;
  imagepreview:string;
  form: FormGroup;
 
 
  onImagepicked(event:Event){
    
    const file=(event.target as HTMLInputElement).files[0];
    this.form.patchValue({image:file});
    this.form.get('image').updateValueAndValidity();
    console.log(file);
     console.log(this.form); 
    const reader=new FileReader();
    reader.onload = () =>{
        this.imagepreview=reader.result as string;
        console.log(this.imagepreview);
    };
    reader.readAsDataURL(file)
}

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
       title: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)]}),
       description: new FormControl(null, { validators: [Validators.required] }),
      image:new FormControl(null,{validators:[Validators.required],asyncValidators:[mimeType]})
  })
  }

}
