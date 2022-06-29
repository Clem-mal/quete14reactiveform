import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { userData } from '../models/user.models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

username = new FormControl('');
mail = new FormControl('');
password = new FormControl('');
address = new FormControl ('');

user: userData = new userData ("","","","");

  constructor() { }

  ngOnInit(): void {
  }
  submit(): void {
this.user = { username : this.username.value,
              mail : this.mail.value,
              password : this.password.value,
              address : this.address.value};

  }

}
