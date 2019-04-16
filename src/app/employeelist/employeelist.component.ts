import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {


  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {
  };


  ngOnInit() {
    this.loadAllUsers();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    // this.currentUserSubscription.unsubscribe();
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  edit(emp: User) {
    this.userService.setEmp(emp);
    this.router.navigate(['/edit']);

  }
  delete(emp: User) {
    console.log('emp', emp);
    this.userService.delete(emp);
  }
}