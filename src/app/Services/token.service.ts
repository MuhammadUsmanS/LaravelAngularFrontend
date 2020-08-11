import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
  	 
  	 login : 'http://localhost:8000/api/login',
  	 signup : 'http://localhost:8000/api/signup'
  };

  constructor() { }

handle(token)
{
	this.set(token) ; 
	// console.log(this.isValid());    
	// console.log(this.payload(token)) ; //for testing purpose if we cal payload here it wil give us splited token part
}

set(token)
{
	localStorage.setItem('token', token);
}

get() 
{
	return localStorage.getItem('token');
}

remove() 
{
	localStorage.removeItem('token');
}

isValid() 
{
	const token = this.get() ; 

	if(token)
	{
		const payload = this.payload(token);   //send the brwoser token to payload  so that   payload method will make this token into 1 array  
		if(payload)
		{	        // return payload.iss === 'http://localhost:8000/api/login' ? true : false ;
			return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false ; 
			         //comparing this.iss === indexOf(payload.iss
		}
	}
	 
	return false ;
}


payload(token)
{
	const payload =  token.split('.')[1];    //  splitting with  dot (.) and we want the 1st one 

	return  this.decode(payload);	
}

decode(payload)
{
	return JSON.parse(atob(payload));
	//parse JSON string  convert into  object 
}

loggedIn()
{
	return  this.isValid(); 
}


}
// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9
// .eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NjY0ODY3OCwiZXhwIjoxNTk2NjUyMjc4LCJuYmYiOjE1OTY2NDg2NzgsImp0aSI6InAxbHZHNlBBaTRWZkxSdWciLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ
// .cr-3fhssP9zhFU-LUjgXZYDJPxfirLi3JyXVIwCY7Sk
