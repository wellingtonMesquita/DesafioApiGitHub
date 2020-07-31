import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { User } from '../shared/user';




@Component({
  selector: 'app-form',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  user: String;
  @Output() onuser = new EventEmitter();

  formUser: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new User());
  }

  createForm(user: User) {
    this.formUser = this.formBuilder.group({
      name: [user.name],
    })
  }

  onSubmit() {
    this.onuser.emit(this.formUser.value);

  }
}