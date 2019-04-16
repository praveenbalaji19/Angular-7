import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editform = this.formBuilder.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    dep: ['', Validators.required],
    sal: ['', [Validators.required]]
  });

  emp: User;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.emp = userService.getEmp();
  }


  ngOnInit() {

  }

  onSubmit() {
    console.log(this.emp);
    this.userService.update(this.emp).subscribe(response => {
      alert(response);
    });
    this.router.navigate(['/']);
  }
}

