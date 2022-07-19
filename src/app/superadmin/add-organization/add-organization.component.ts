import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocaleConfig } from 'ngx-daterangepicker-material';
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

  min_date:any="";
  constructor(private router:Router,private route: ActivatedRoute, private apiService: ApiserviceService,public commonService:CommonserviceService) {
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

  datesUpdated(){
    
  }


  addOrg(){
      if (this.org_name=='' || this.active_start_date =='' || this.active_end_date =='') {
        this.commonService.showAlert('Alert', 'Please fill all mandatory field(s)')
        return false;
      }
      // if (this.found_year > cYear) {
      //   this.commonService.showAlert('Alert', 'Founded Year should be less than or equal to current Year')
      //   return false;
      // }
      if (this.found_year.length < 4) {
        this.commonService.showAlert('Alert', 'Please enter correct Year of foundation')
        return false;
      }
  
      // if (this.isStatusActive == false) {
      //   this.active_start_date = this.datePipe.transform(new Date(), "yyyy-MM-dd");
      //   this.active_end_date = this.datePipe.transform(new Date(), "yyyy-MM-dd");
      // }
  
      if (this.active_end_date < this.active_start_date) {
        // this.commonService.showAlert('Alert', 'Active end date should greater than Active start date').then(
        //   (result: any) => {
        //     return;
        //   });
        // return false;
      }
  
      var jsonData = {
        "org_name": this.org_name,
        "year_founded": this.found_year,
        "HQ_add": this.hq_add,
        "country": this.country,
        "state": this.state,
        "city": this.city,
        "org_info": this.orgInfo,
        "org_type": this.organisationType,
        "zip_code": this.zip,
        "fax": this.fax,
        "pan_no": this.pan,
        "tan_no": this.tan,
        "web_url": this.webUrl,
        "contact_person_name": this.personName,
        "contact_person_email": this.personMail,
        "contact_person_phone": this.personPhn,
        "status": this.statusOrg,
        // "start_date": "",//new Date(this.active_start_date).toISOString().split('T')[0],
        // "end_date": ""//new Date(this.active_end_date).toISOString().split('T')[0]
      }
  
      this.apiService.requestViaPost('/add_organization/', jsonData).then(
        (result: any) => {
          if (result.status) {
            this.commonService.showSuccess("Success",result.massage)
            this.router.navigate(['/superadmin/organization']);
          }else{
            this.commonService.showError("Error",result.error)
          }
        }, (err) => {
         
        }
      );
    
  }


  updateOrg(){
    if (this.org_name=='' || this.active_start_date =='' || this.active_end_date =='') {
      this.commonService.showAlert('Alert', 'Please fill all mandatory field(s)')
      return false;
    }
    // if (this.found_year > cYear) {
    //   this.commonService.showAlert('Alert', 'Founded Year should be less than or equal to current Year')
    //   return false;
    // }
    if (this.found_year.length < 4) {
      this.commonService.showAlert('Alert', 'Please enter correct Year of foundation')
      return false;
    }

    // if (this.isStatusActive == false) {
    //   this.active_start_date = this.datePipe.transform(new Date(), "yyyy-MM-dd");
    //   this.active_end_date = this.datePipe.transform(new Date(), "yyyy-MM-dd");
    // }

    if (this.active_end_date < this.active_start_date) {
      // this.commonService.showAlert('Alert', 'Active end date should greater than Active start date').then(
      //   (result: any) => {
      //     return;
      //   });
      // return false;
    }

    var jsonData = {
      "org_name": this.org_name,
      "year_founded": this.found_year,
      "HQ_add": this.hq_add,
      "country": this.country,
      "state": this.state,
      "city": this.city,
      "org_info": this.orgInfo,
      "org_type": this.organisationType,
      "zip_code": this.zip,
      "fax": this.fax,
      "pan_no": this.pan,
      "tan_no": this.tan,
      "web_url": this.webUrl,
      "contact_person_name": this.personName,
      "contact_person_email": this.personMail,
      "contact_person_phone": this.personPhn,
      "status": this.statusOrg,
      // "start_date": "",//new Date(this.active_start_date).toISOString().split('T')[0],
      // "end_date": ""//new Date(this.active_end_date).toISOString().split('T')[0]
    }

    this.apiService.requestViaPatch('/organization/'+this.id+"/", jsonData).then(
      (result: any) => {
        if (result.status) {
          this.commonService.showSuccess("Success",result.massage)
          this.router.navigate(['/superadmin/organization']);
        }else{
          this.commonService.showError("Error",result.error)
        }
      }, (err) => {
       
      }
    );
  
}
  
}
