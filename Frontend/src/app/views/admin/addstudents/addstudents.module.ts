import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddstudentsRoutingModule } from './addstudents-routing.module';
import { AddstudentsComponent } from './addstudents/addstudents.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddstudentsComponent
  ],
  imports: [
    CommonModule,
    AddstudentsRoutingModule,
    FormsModule
  ]
})
export class AddstudentsModule { }
