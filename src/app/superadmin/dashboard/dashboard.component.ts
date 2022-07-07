import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  orgCount: any = 0;
  travelCount: any = 0;
  visaCount: any = 0;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  pushToPage(request, status) {
    // this.router.navigate(['/Dashboard/Org-Travel-List']);

  }
  pushToPageVisa() {
    // this.router.navigate(['/Dashboard/Org-Visa-Request']);
  }
  pushToPageOrganisation() {
    this.router.navigate(['/superadmin/organization']);
  }
}
