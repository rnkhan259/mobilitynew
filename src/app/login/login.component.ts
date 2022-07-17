import { ApiserviceService } from './../sevices/apiservice.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonserviceService } from '../sevices/commonservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  Otp: any = false;
  forgot: any = false;
  viaOtp: boolean = false;
  username: any = "";
  password: any = '';
  email: any = '';
  emailPhn: string = '';
  small = false;
  constructor(private router: Router, private apiService: ApiserviceService, private commonService:CommonserviceService) { }

  ngOnInit(): void {
    sessionStorage.clear();
    localStorage.clear();
  }

  onSubmit(signInForm: NgForm) {
    console.log(signInForm.value);
  }

  keyDownFunction(val) {
    if (val.keyCode === 13) {
      this.signIn();
      // rest of your code
    }
  }

  signIn() {

    if (this.username == '') {
      this.commonService.showAlert('Alert','Please enter Username');
      return;
    }

    if (this.password == '') {
      this.commonService.showAlert('Alert','Please enter password');
      return;
    }

    let postParams = {
      username: this.username,
      password: this.password,
    }

    this.apiService.requestViaPost('/api/custom/login/', postParams).then(
      (result: any) => {
        if (result.access && result.status) {
          localStorage.setItem('show', '')
          sessionStorage.setItem('token', result['access']);
          sessionStorage.setItem('refreshToken', result['refresh']);
          this.router.navigate(['/superadmin/dashboard']);
        } else {
          this.commonService.showError('Error', result.massage);
        }
      }, (err) => {
      }
    );
    // this.router.navigate(['/dashboard']);
  }

  getUserInfo() {
    let postParams = {
      email: this.username,
    }
    this.apiService.requestViaPost('/emoloyeeinfo/', postParams).then(
      (data: any) => {
       console.log(data);
       
      }, (err) => {
        
      }
    );
  }

  forgotPass() {
    this.forgot = true;
    this.email = '';
    this.password = ''
    localStorage.clear();
  }

  cancel() {
    this.forgot = false;
    this.emailPhn = '';
  }

  changeToggle(event: { checked: boolean; }) {
    console.log(event);
    this.viaOtp = event.checked;
  }

  otpPass() {
    this.Otp = true;
    this.email = '';
    this.password = ''
    localStorage.clear();
  }

}
