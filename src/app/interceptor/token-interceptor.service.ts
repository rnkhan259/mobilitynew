import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { timeout } from 'rxjs/operators';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  token: any;
  constructor(private injector: Injector) {
    var token = (sessionStorage.getItem('token'));

  }


  intercept(req, next) {

    if (sessionStorage.getItem('token') != null) {
      var token = sessionStorage.getItem('token')
      this.token = 'Bearer' + ' ' + token;

    }
    else {
      this.token = ''
    }
    const timeoutValueNumeric = Number(90000);

    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('authorization', this.token)

      }
    )
    return next.handle(tokenizedReq).pipe(timeout(timeoutValueNumeric));
  }


}

