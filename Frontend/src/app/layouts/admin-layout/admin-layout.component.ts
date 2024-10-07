import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  username:any
  constructor(private asd:AuthadminService,private route:Router) {
  
      this.username=this.asd.getUsername()
     
   }

  ngOnInit(): void {
  }

  //IF i clicked on layout button go to /admin/login and remove token from localstorage
  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/admin/login'])
  }

  
}
