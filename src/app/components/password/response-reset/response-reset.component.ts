import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JarwisService } from "../../../Services/jarwis.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

	public error = []; 

	public form = {
		email : null,
		password : null,
		password_confirmation :null,
		resetToken : null 
	}
 

  constructor( private route : ActivatedRoute,
              private jarwis : JarwisService , 
              private router : Router
              )
  {
  	route.queryParams.subscribe(params => {
  		this.form.resetToken = params ['token']
  	});
  }

  ngOnInit(): void {
  }


  onSubmit()
  {
  	this.jarwis.changePassword(this.form).subscribe(

  		data => this.handleResponse(data),
  		error => this.handleError(error)
  		)
  }


  handleResponse(data)
  {
  	this.router.navigateByUrl('/login');
  }

  handleError(error)
  {

  }

}
