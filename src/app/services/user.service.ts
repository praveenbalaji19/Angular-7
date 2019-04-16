import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../model/user';
import { EmployeelistComponent } from '../employeelist/employeelist.component';

@Injectable({ providedIn: 'root' })
export class UserService {
    emp: User;

    constructor(private http: HttpClient) { }

    setEmp(emp: User) {
        this.emp = emp;
    }

    getEmp() {
        return this.emp;
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/employee/all`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/users/${id}`);
    }

    add(user: User) {
        return this.http.post(`${environment.apiUrl}/employee/add`, user);
    }

    update(user: User) {
        return this.http.put(`${environment.apiUrl}//employee/update/${user.id}`, user);
    }

    delete(user:User) {
        return this.http.delete(`${environment.apiUrl}/employee/delete/${user.id}`);
    }
}