import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { SharedDataService } from 'src/app/views/services/shared-data.service';

@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.css']
})
export class AddstudentsComponent implements OnInit {
  messageError :string=""
  constructor(private sd:SharedDataService ,private route : Router) { }

  ngOnInit(): void {
  }
  add(f:any){
     let data:NgForm = f.value;
     this.sd.addstudents(data).subscribe(data=>{
     // console.table(data)
      //error from backend
      this.route.navigate(['/admin/allstudents/'])
     },(err:HttpErrorResponse)=>{
       this.messageError=err.message
     })
  }
}
