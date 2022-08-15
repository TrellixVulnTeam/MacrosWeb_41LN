import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  static displayLoading: boolean;;
  title = 'MacrosWeb';

  AppComponent = AppComponent;
  constructor() {
    AppComponent.displayLoading = false;
  }

}
