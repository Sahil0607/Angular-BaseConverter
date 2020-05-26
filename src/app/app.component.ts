import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css'],
})
export class AppComponent implements OnInit {
  form;
  b=0;
  o=0;
  h=0;

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.form = this.fb.group({
        decimal: [null],
        binary: [''],
        octal: [''],
        hexa: ['']
    });
  }

  decimalChanged(event){
    let newValue = event.target.value;

    if(this.form.value.decimal !== null){
      this.form.controls.binary.setValue(parseInt(newValue,10).toString(2));
      this.form.controls.octal.setValue(parseInt(newValue,10).toString(8));
      this.form.controls.hexa.setValue(parseInt(newValue,10).toString(16).toUpperCase());
    }
    else {
      this.form.controls.binary.setValue('');
      this.form.controls.octal.setValue('');
      this.form.controls.hexa.setValue('');
    }
  }

  binaryChanged(event){
    let newValue = event.target.value;
    this.b=this.b + 1;

    if(this.b==1) {
      if(newValue != "") {
        this.form.controls.decimal.setValue(parseInt(newValue,2).toString(10));
      } else {
        this.form.controls.decimal.setValue(null);
      }
      this.b=0;
    }
  }

  octalChanged(event){
    let newValue = event.target.value;
    this.o = this.o + 1;

    if(this.o == 1){
      if(newValue != "") {
        this.form.controls.decimal.setValue(parseInt(newValue,8).toString(10));
      } else {
        this.form.controls.decimal.setValue(null);
      }
      this.o=0;
    }
  }

  hexaChanged(event) {
    let newValue = event.target.value;
    this.h = this.h + 1;

    if(this.h == 1) {
      if(newValue != "") {
        this.form.controls.decimal.setValue(parseInt(newValue,16).toString(10));
      } else {
        this.form.controls.decimal.setValue(null);
      }
      this.h=0;
    }
  }

  onSubmit() {
    console.log(this.form);
  }
}
