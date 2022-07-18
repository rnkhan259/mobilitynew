import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/sevices/apiservice.service';
import { CommonserviceService } from 'src/app/sevices/commonservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  organization: any = "";
  emp_code: any = "";
  username: any = "";
  first_name: any = "";
  last_name: any = "";
  login_method: any = "";
  email: any = "";
  status: any = "true";
  orgList: any = [];

  constructor(private apiService: ApiserviceService, public commonService: CommonserviceService) { }


  ngOnInit(): void {
    this.getOrg();
  }

  getOrg() {
    this.apiService.requestViaGet('/add_organization/').then(
      (result: any) => {
        if (result.status) {
          this.orgList = result.results;
        }
      },
      (error) => {
      }
    );
  }


  addUser() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let postParams = {
      org_id: this.organization,
      login_method: this.login_method,
      email: this.email,
      user_name: this.username,
      emp_code: this.emp_code,
      first_name: this.first_name,
      last_name: this.last_name,
      status: this.status
    }
    console.log(postParams);

    if (postParams.org_id == '' || postParams.login_method == '' || postParams.emp_code == '' || postParams.email == '' || postParams.user_name == '' || postParams.first_name == '' || postParams.last_name == '') {
      this.commonService.showAlert('Alert', 'Please fill all required fields');
      return;
    }

    if (mailformat.test(postParams.email) == false) {
      this.commonService.showAlert('Alert', 'Please enter Valid email address');
      return;
    }

    this.apiService.requestViaPost('/add_organization_admin/', postParams).then(
      (result: any) => {
        if (result.status) {
          this.commonService.showSuccess('Success', result.massage);
        } else if (!result.status && result.data.length != 0) {
          var arrError = [];
          for (var key in result['data']) {
            arrError.push(result['data'][key][0]);
          }
          this.commonService.showError('Error', arrError.join("<br>"));
        } else if (!result.status && result.data.length == 0) {
          this.commonService.showError('Error', result.massage);
        }
      },
      (err) => {
        this.commonService.showError('Error', err);
      }
    );
  }

}
