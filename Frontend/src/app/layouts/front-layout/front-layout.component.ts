import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/services/authuser.service';

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css']
})
export class FrontLayoutComponent implements OnInit {
  verifuser:any ;
  constructor(private router:Router ,public au:AuthuserService) {
    if(this.au.userLoggedIn()==true){
      this.verifuser=true ;
    }else{
      this.verifuser=false ;
    }
   }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/loginuser'])
  }

}
