import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['./auth-admin-layout.component.css'],
})
export class AuthAdminLayoutComponent implements OnInit {
  dataReceived: any;
  url: any;
  messageAuthError: string | null = null; // Initialize with null

  constructor(
    private authService: AuthadminService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    if (this.authService.LoggedIn()) {
      this.router.navigate(['/admin']);
    }
  }

  ngOnInit(): void {
    this.url = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/admin/';
    console.log(this.url);
  }

  loginadmin(form: any): void {
    const data = form.value;

    this.authService.login(data).subscribe(
      (response) => {
        this.dataReceived = response;
        this.authService.saveDataProfil(this.dataReceived.token);
        this.router.navigate([this.url]);
      },
      (error) => {
        this.messageAuthError = "Invalid email or password"; // Set error message
        console.error('Login error:', error); // Log error for debugging
      }
    );
  }
}
