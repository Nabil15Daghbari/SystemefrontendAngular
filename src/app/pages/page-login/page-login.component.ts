import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';
import { AuthenticationRequest } from 'src/sr-api/src/models/authentication-request';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  authenticationRequest: AuthenticationRequest = {};
  errorMessage = '';


  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

 

  login() {
    this.userService.login(this.authenticationRequest).subscribe((data) => {
      this.userService.setAccessToken(data);
      this.getUserByEmail();
      this.router.navigate(['/admin/Mon-profil']);
    }, error => {
      this.errorMessage = 'Login et / ou mot de passe incorrecte';
    });
  }



  getUserByEmail(): void {
    this.userService.getUserByEmail(this.authenticationRequest.login)
    .subscribe(user => {
      this.userService.setConnectedUser(user);
    });
  }


  retour(){
    this.router.navigate(['']);
  }


}
