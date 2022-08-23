import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  resource: string = 'https://app.powerbi.com/view?r=eyJrIjoiODQ3MWMwZTMtNmZhNC00Zjk4LWE1YTUtZGUwMGM0OWQ0NmQ4IiwidCI6ImQ1N2YyYTFiLWM3MTEtNDcxMC1hZDJkLTcyN2RmZWU2YWY0MCIsImMiOjR9&pageName=ReportSection819e41e46020e69d00b7';

  constructor() { }

  ngOnInit(): void {
  }

}
