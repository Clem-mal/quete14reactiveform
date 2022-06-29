import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { userData } from '../models/user.models';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

userForm : FormGroup = this.fb.group({
    credential: this.fb.group({                  // créer une instance de FormGroup (fb = formbuilder)
          mail : ['toto@gmail.com'],             // créer une instance de FormControl
          password : ['1234'],                   // créer une instance de FormControl
  })
});


constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

  }

  login() {
    console.log('donnée du formulaire....', this.userForm.value); // methode a appliqué au submit
  }

}
