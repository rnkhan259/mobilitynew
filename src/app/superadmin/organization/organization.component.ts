import { Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiserviceService } from 'src/app/sevices/apiservice.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CommonserviceService } from 'src/app/sevices/commonservice.service';


interface Org {
  "id": 'No Record(s) Found',
  "name": '',
  "info": '',
  "address": '',
  "city": '',
  "Action": ''
}

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  orgList: any = [];
  dataSource: MatTableDataSource<Org>;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('sort') sort: MatSort;
  columns: string[] = ['id', 'name', 'info', 'address', 'city', 'Action'];
  constructor(private router:Router,private apiService: ApiserviceService,private commonService:CommonserviceService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.apiService.requestViaGet('/add_organization/').then(
      (result: any) => {
        if (result.status) {
          this.orgList = result.results;
          var dataArr=[];
          for (let i = 0; i < result.results.length; i++) {
            var json = {
              "id": result.results[i]["org_id"],
              "name": result.results[i]["org_name"],
              "info": result.results[i]["org_info"],
              "address": result.results[i]["HQ_add"],
              "city": result.results[i]["city"],
              "Action": result.results[i]["id"]
            }
            dataArr.push(json);
          }
          this.dataSource=new MatTableDataSource(dataArr)
        } else {
          this.commonService.showError("Alert","No Record Found");
        }
      },
      (error) => {
      }
    );
  }

  showInfo(id){
    this.router.navigate(['/superadmin/organization-detail',id])
  }

  addOrg(){
    this.router.navigate(['/superadmin/organization-detail',""])
  }
}
