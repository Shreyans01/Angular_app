import { DatePipe } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup, AbstractControl } from '@angular/forms';

export interface form {
  id: string,
  formGroup: FormGroup,
}

@Component({
  selector: 'json-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers:[DatePipe]
})
export class FormComponent implements OnInit {
  forms: FormGroup;
  @Input() formJson1: any;
  @Input() formJson2: any;
  @Input() debug: boolean = false;
  @Output() output: EventEmitter<FormGroup> = new EventEmitter();
  fg: FormGroup;
  form1: boolean = false;
  f: any;
  dateValue: string;

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe
    ) { }

  ngOnInit() { }

  createForm1(form){
    this.f = form == 'form1' ? this.formJson1.fields : this.formJson2.fields;
    this.form1 = true;
    this.forms = this.fb.group({
    });
    this.f.forEach(element => {
      if (element.type == 'date') {
        this.forms.addControl(element.key, new FormControl('', (element.required ? [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")] : null)));
        this.forms.controls[element.key].updateValueAndValidity();
      }
      if (element.type == 'number') {
        this.forms.addControl(element.key, new FormControl('', (element.required ? [Validators.required, Validators.pattern("^[0-9]{10}$")] : null)));
        this.forms.controls[element.key].updateValueAndValidity();
      }
      if (element.type == 'dropdown') {
        this.forms.addControl(element.key, new FormControl('', (element.required ? [Validators.required, Validators.pattern("^[0-9]{10}$")] : null)));
        this.forms.controls[element.key].updateValueAndValidity();
      }
      else {
        this.forms.addControl(element.key, new FormControl('', (element.required ? Validators.required : null)));
        this.forms.controls[element.key].updateValueAndValidity();
      }
  })
  }

  onSubmit(form: any) {
console.log("form",form)
  }

  saveDate(ev){
    this.dateValue = this.datePipe.transform(ev.target.value,'yyyy-MM-dd');
  }
}