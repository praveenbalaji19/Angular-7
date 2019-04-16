import { Component, OnInit } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { shallowEqualArrays } from '@angular/router/src/utils/collection';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newform = this.formBuilder.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    dep: ['', Validators.required],
    sal: ['', [Validators.required]]
  });


  constructor(private userService: UserService, private formBuilder: FormBuilder,private router: Router) {

  };

  ngOnInit() {

  }

  onSubmit() {
    var emp = {
      id: this.newform.value.id,
      name: this.newform.value.name,
      department: this.newform.value.dep,
      salary: this.newform.value.sal
    }
    this.userService.add(emp).subscribe(response => {
      this.router.navigate(['/']);
    });
  }
}
