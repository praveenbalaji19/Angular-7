import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeelistComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'add',
    component: NewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

