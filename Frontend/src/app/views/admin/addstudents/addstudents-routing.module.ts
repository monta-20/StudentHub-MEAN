import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentsComponent } from './addstudents/addstudents.component';

const routes: Routes = [
  {path:'',component:AddstudentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddstudentsRoutingModule { }
