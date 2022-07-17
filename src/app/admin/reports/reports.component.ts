import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  embedConfiguration = {
    accessToken: "anAccessToken",
    embedUrl: "anEmbedUrl",
    id: "aReportId",
    permissions: "somePermissions",
    tokenType: "aTokenType",
    type: 'report'
};
  constructor() { }

  ngOnInit(): void {
  }

}
