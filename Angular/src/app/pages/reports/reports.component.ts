import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  resource: string;
  constructor(
    router: Router,
    private activeRoute: ActivatedRoute
  ) {


    let currentPage = router.routerState.snapshot.url;
    let currentPageSplit = currentPage.split('/');
    if (currentPageSplit.length > 0) {
      currentPage = currentPageSplit[currentPageSplit.length - 1];
    }
    console.log('currentPage', currentPage);


  }

  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.params;
    this.loadInfo(routeParams.id);

    this.activeRoute.params.subscribe(routeParams => {
      this.loadInfo(routeParams.id);
    });
  }

  loadInfo(currentPage) {
    if (currentPage == '1') {
      this.resource = 'https://app.powerbi.com/view?r=eyJrIjoiZDNhNzM1ZDMtNGNjOS00YTJjLTk4ZTEtMDEzMThiNDQwNjE3IiwidCI6ImQ1N2YyYTFiLWM3MTEtNDcxMC1hZDJkLTcyN2RmZWU2YWY0MCIsImMiOjR9&pageName=ReportSection913fb6902759bae7187c';
    } else if (currentPage == '2') {
      this.resource = 'https://app.powerbi.com/view?r=eyJrIjoiZGU4YmNmNmUtMmE3Zi00MGRkLWFkZTUtYzU2MzkzNGE3ZDMwIiwidCI6ImQ1N2YyYTFiLWM3MTEtNDcxMC1hZDJkLTcyN2RmZWU2YWY0MCIsImMiOjR9&pageName=ReportSection';
    } else if (currentPage == '3') {
      this.resource = null;
    } else if (currentPage == '4') {
      this.resource = 'https://app.powerbi.com/view?r=eyJrIjoiY2ZhNWM5ZDctNDUyZS00NTk3LThlYjgtMDcwNDQ3ZjYzZjVlIiwidCI6ImQ1N2YyYTFiLWM3MTEtNDcxMC1hZDJkLTcyN2RmZWU2YWY0MCIsImMiOjR9&pageName=ReportSection';
    } else if (currentPage == '5') {
      this.resource = 'https://app.powerbi.com/view?r=eyJrIjoiODQ3MWMwZTMtNmZhNC00Zjk4LWE1YTUtZGUwMGM0OWQ0NmQ4IiwidCI6ImQ1N2YyYTFiLWM3MTEtNDcxMC1hZDJkLTcyN2RmZWU2YWY0MCIsImMiOjR9&pageName=ReportSection63c7489d5eb22f54645b';
    } else if (currentPage == '6') {
      this.resource = 'https://app.powerbi.com/view?r=eyJrIjoiMTI5M2JjYmItOTdmNC00NWY2LTliMmItM2QzNDBhNzRmOTk3IiwidCI6ImQ1N2YyYTFiLWM3MTEtNDcxMC1hZDJkLTcyN2RmZWU2YWY0MCIsImMiOjR9&pageName=ReportSection';
    } else if (currentPage == '7') {
      this.resource = 'https://app.powerbi.com/view?r=eyJrIjoiMDI4YzM4NDAtZjY3NS00MjhlLWJkODQtYmFkOGY2M2YxNjM1IiwidCI6ImQ1N2YyYTFiLWM3MTEtNDcxMC1hZDJkLTcyN2RmZWU2YWY0MCIsImMiOjR9&pageName=ReportSection819e41e46020e69d00b7';
    }
  }

}
