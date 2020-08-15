import { Component, OnInit } from '@angular/core';

// 
import { JarwisService } from "../../Services/jarwis.service";
import { TokenService } from "../../Services/token.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	public error = <any> [];


	public form = {

		 name: null,
		 email: null,
		 password: null,
		 password_confirmation: null,
	};

  constructor( private jarwis: JarwisService ,
               private token: TokenService,
               private router: Router ) { }

  onSubmit(){
 
  	this.jarwis.signup(this.form).subscribe(

  		// data  => console.log(data),
      data  => this.handleResponse(data),
  		error => this.handleError(error)
  		);
  }

  handleResponse(data)
  {
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }

  handleError(error)
  {

  		this.error = error.error.errors;
  }

  ngOnInit(): void {
  }


}
