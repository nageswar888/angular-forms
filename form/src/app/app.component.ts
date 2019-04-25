import { Component } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  first;
  father;
  emal;
  pwd;
  dat;
  precentadd;
  mob;
  gend;
  bool=false;

constructor(private localStorage: LocalStorage){}
  ngOninit() {
  this.localStorage.getItem('user').subscribe((user) => {
    this.bool=true;
      console.log('nageswar');
    this.first=user.firstName;
    this.father=user.fatherName;
    this. emal=user.email;
    this.pwd=user.password;
    this.precentadd=user.padd;
    this.gend=user.gender;
    this. mob=user.mobile;
    this.dat=user.dob;
    });
  }

}
