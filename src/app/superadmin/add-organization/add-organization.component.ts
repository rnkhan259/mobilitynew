import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/sevices/apiservice.service';
import { CommonserviceService } from 'src/app/sevices/commonservice.service';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss']
})
export class AddOrganizationComponent implements OnInit {
  id: any;
  org:any={};

  org_id: any = '';
  org_name: any = '';
  found_year: any = '';
  hq_add: any;
  city: any;
  orgInfo: any;
  organisationType: any='';
  zip: any;
  fax: any;
  pan: any;
  tan: any;
  webUrl: any;
  personName: any;
  personMail: any = '';
  personPhn: any;
  active_start_date: any = '';
  active_end_date: any = '';
  isStatusActive: boolean = true;
  country: any;
  state: any;
  statusOrg:any="0";
  constructor(private route: ActivatedRoute, private apiService: ApiserviceService,public commonService:CommonserviceService) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    if (this.id) {
      this.getOrg();
    }
  }

  onStatusChange(mrChange: any) {
    this.statusOrg = mrChange.value
    if (this.statusOrg == "1") {
      this.isStatusActive = true
    } else {
      this.isStatusActive = false
    }
    // let mrButton: MatRadioButton = mrChange.source;
  }

  getOrg() {
    this.apiService.requestViaGet('/organization/' + this.id+'/').then(
      (result: any) => {
        if (result.status) {
          let data = result.results;
          this.org_id = data.org_id;
          this.org_name = data.org_name;
          this.found_year = data.year_founded;
          this.hq_add = data.HQ_add;
          this.country = data.country;
          this.state = data.state;
          this.city = data.city;
          this.orgInfo = data.org_info;
          this.organisationType = data.org_type;
          this.zip = data.zip_code;
          this.fax = data.fax;
          this.pan = data.pan_no;
          this.tan = data.tan_no;
          this.webUrl = data.web_url;
          this.personName = data.contact_person_name;
          this.personMail = data.contact_person_email;
          this.personPhn = data.contact_person_phone;
          if (data.status == true) {
            this.statusOrg = "1";
          } else {
            this.statusOrg = "0";
            this.isStatusActive = false
          }
          this.active_start_date = data.start_date
          this.active_end_date = data.end_date
        } 
      },
      (error) => {
      }
    );
  }

}
