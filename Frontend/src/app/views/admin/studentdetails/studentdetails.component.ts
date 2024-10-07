import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  id=''
  dataObject:any
  messageErr=''
  constructor(private route:ActivatedRoute,private ds:SharedDataService) {
    this.route.params.subscribe(params=>{
      
      this.id=params.id})

    this.ds.getOnestudent(this.id).subscribe(response=>{
      console.table(response)
      this.dataObject=response}
      ,(err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this student in our database"})
   }

  ngOnInit(): void {
  }

}
