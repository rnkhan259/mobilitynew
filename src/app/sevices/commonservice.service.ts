import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private toastr: ToastrService) { }

  showSuccess(title, msg) {
    this.toastr.success(msg, title);
  }

  showError(title, msg) {
    this.toastr.error(msg, title);
  }

  isNumber(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57)) {
      return false;
    } else {
      return true;
    }
  }

  isNumberYear(evt) {
    if (evt.target.value.length > 3) {
      return false;
    }

    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57)) {
      return false;
    } else {
      return true;
    }
  }

  alphaOnly(evt) {
    var key = (evt.which) ? evt.which : evt.keyCode
    if ((key >= 65 && key <= 90) || key == 8 || (key >= 95 && key <= 122))
      return true;

    return false;
  };
}
