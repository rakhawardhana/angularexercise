import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})


export class LocationService {

  constructor(public http: HttpClient) { }

  dimana() {
    return 'in Jakarta'
  }

  pekerjaan(){
    return 'tukang ngoding' 
  }

  octocatGithub() {
    return this.http.get('https://api.github.com/users/octocat');
  }

}
