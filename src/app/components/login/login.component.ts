import { Component, OnInit } from '@angular/core';
//////////////////////////////////////////////////////// 
import { JarwisService } from "../../Services/jarwis.service";
import { TokenService } from "../../Services/token.service";
import { AuthService } from "../../Services/auth.service";
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


	public form = {   //custom

		email:null,
		password:null,
	} ; 

	public error = null ;//custom

  constructor( private Jarwis: JarwisService , 
               private Token : TokenService ,
               private router: Router,
               private Auth  : AuthService  ) { }

  onSubmit()
  {
  	this.Jarwis.login(this.form).subscribe(

      data  => this.handleResponse(data),
  		error => this.handleError(error)
  		// data  => console.log(data),
  		// error =>console.log(error)
  		);
  	// console.log(this.form);
  	// console.log('something is here');

  }

  handleResponse(data) 
  {
    this.Token.handle(data.access_token);       // 1st set token 
    this.Auth.changeAuthStatus(true);           // 2nd give status 
    this.router.navigateByUrl('/profile');      // 3rd navigate 
  }

  handleError(error)
  { // error comming From    AuthController   Login( )

  	this.error = error.error.error ;   // this.error   is   the public  error = null variable  ; 
  }

  ngOnInit(): void {
  }

}
