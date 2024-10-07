import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/views/services/shared-data.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent implements OnInit {
  dataArray: any;
  dataStudent = {
    firstname:'',
    lastname:'',
    age:0,
    phone:0,
    email:'',
    id:'',
  }
  messageSuccess=''
  constructor(private sd : SharedDataService , private route:Router) { 
    this.sd.getAllstudents().subscribe((data) => {
     // console.log(data);
      this.dataArray = data;  // Assign the array of students to dataArray
    });
  }   
  ngOnInit(): void {
  }
  
  delete(id:any,i:number){
       this.sd.deletestudents(id).subscribe((res)=>{
        console.log(res) ;
        //this is neccessary to remove before reload page , mean in real page
        this.dataArray.splice(i,1)
       })
  }
  getdata(firstname:string,lastname:string,age:number,phone:number,email:string,id:any){
        this.messageSuccess=''
        this.dataStudent.firstname=firstname;
        this.dataStudent.lastname=lastname;
        this.dataStudent.age=age;
        this.dataStudent.phone=phone;
        this.dataStudent.email=email;
        this.dataStudent.id =id
        console.log(this.dataStudent)
  }

  update(f:NgForm){
    let data=f.value
    this.sd.updatestudents(this.dataStudent.id,data).subscribe(response=>
      {
      console.log(response)
        let indexId=this.dataArray.findIndex((obj:any)=>obj._id==this.dataStudent.id)

        this.dataArray[indexId].firstname=data.firstname
        this.dataArray[indexId].lastname=data.lastname
        this.dataArray[indexId].age=data.age
        this.dataArray[indexId].phone=data.phone
        this.dataArray[indexId].email=data.email


        this.messageSuccess=`this student ${this.dataArray[indexId].firstname} is updated`
        this.route.navigate(['/admin/allstudents/'])


      },(err:HttpErrorResponse)=>{
        console.log(err.message)
      
      })
  }
  
  details(id:any){
    this.route.navigate(['/admin/studentdetails/'+id])
  }
  

}
