import { ApiserviceService } from './../sevices/apiservice.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private router: Router, private apiService: ApiserviceService) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm) {
    console.log(signInForm.value);
  }

  signIn() {

    if (this.username == '') {
      alert('Please enter Username');
      return;
    }

    if (this.password == '') {
      alert('Please enter password');
      return;
    }

    let postParams = {
      username: this.username,
      password: this.password,
    }

    // this.spinnerService.show()
    this.apiService.requestViaPost('/api/custom/login/', postParams).then(
      //this.authService.requestViaPost('api/login/', postParams).then(
      (result: any) => {
        if (result.access) {
          localStorage.setItem('show', '')
          sessionStorage.setItem('token', result['access']);
          sessionStorage.setItem('refreshToken', result['refresh']);
          this.router.navigate(['/superadmin/dashboard']);
          // this.getUserInfo();
          // }
        } else {
          // this.spinnerService.hide()
          // this.authService.commonConfirmationAlert('', result.massage, '')
        }
      }, (err) => {
        // this.error = true;
        // this.spinnerService.hide()
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
        // this.authService.commonConfirmationAlert('Alert', 'Something went wrong! Try again later.', '')
        // this.error = true;
        // this.spinnerService.hide()
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
