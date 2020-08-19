import { Component, OnInit } from '@angular/core';

import { JarwisService } from "../../../Services/jarwis.service";
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public form = {
  	email: null 
  };

  public error = null ; 

  constructor( 

  	private jarwis: JarwisService,
  	private notify: SnotifyService

  	) { }

  ngOnInit(): void {
  }


  onSubmit( )
  {
  	this.jarwis.sendResetPasswordLink(this.form).subscribe(

  		data  => this.handleResponse(data),
  		// data  => console.log(data),
  		// error => console.log(error)
  		error => this.notify.error(error.error.error),

  		);
  }


  handleResponse(res)
  {
  	// console.log(res);
  	this.form.email = null ;
  }


}
