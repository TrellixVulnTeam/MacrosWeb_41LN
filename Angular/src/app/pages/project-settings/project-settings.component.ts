import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { LegalizacionService } from 'src/app/services/legalizacion.service';

@Component({
  selector: 'app-project-settings',
  templateUrl: './project-settings.component.html',
  styleUrls: ['./project-settings.component.scss']
})
export class ProjectSettingsComponent implements OnInit {

  selectedProject: any;
  projectList: any = [];
  originalProjectList: any = [];
  total: number = 0;
  totalActive: number = 0;

  selectedOptions: any;

  projectActive = [];

  searchText: any;

  constructor(
    private _legalizacionService: LegalizacionService
  ) { }

  ngOnInit(): void {
    AppComponent.displayLoading = true;
    this._legalizacionService.getProjectSettings()
      .subscribe(
        (response: any) => {
          console.log(response);
          this.projectList = response.data;
          this.originalProjectList = response.data;

          this.total = this.projectList.length;
          for (let index = 0; index < this.projectList.length; index++) {
            const element: any = this.projectList[index];
            if (element.STATUS) {
              this.projectActive.push(element);
            }
          }
          this.totalActive = this.projectActive.length;


          this.selectedOptions = this.projectActive;
          AppComponent.displayLoading = false;
        }, err => {
          console.log(err);
          AppComponent.displayLoading = false;
        }
      )
  }

  onFilter(evt) {
    this.projectActive = [];
    console.log('evt', evt);
    this.projectList = this.originalProjectList.filter(item => String(item.PRY_Nombre).toLowerCase().includes(String(evt).toLowerCase()));
    for (let index = 0; index < this.projectList.length; index++) {
      const element: any = this.projectList[index];
      if (element.STATUS) {
        this.projectActive.push(element);
      }
    }
    console.log('this.projectActive', this.projectActive);
    this.selectedOptions = this.projectActive;


  }

  async onNgModelChange(evt) {
    // console.log('onNgModelChange', evt);

    AppComponent.displayLoading = true;
    evt.STATUS = !evt.STATUS;
    console.log('onNgModelChange2', evt);
    await this._legalizacionService.updateProject(evt.PRY_ID, evt.PRY_Nombre, evt.STATUS ? 1 : 2).toPromise();
    AppComponent.displayLoading = false;

    // console.log(this.projectActive.length + ' - ' + evt.length);
    // if (this.projectActive.length < evt.length) {
    //   let difference = evt.filter(x => !this.projectActive.includes(x));
    //   difference = difference[0];
    //   console.log(difference);
    //   this.projectActive.push(difference);

    //   await this._legalizacionService.updateProject(difference.PRY_ID, difference.PRY_Nombre, 1).toPromise();
    // } else if (this.projectActive.length > evt.length) {
    //   let difference: any = this.projectActive.filter(x => !evt.includes(x));
    //   console.log(difference);

    //   this.projectActive = this.projectActive.filter(item => !difference.includes(item))
    //   difference = difference[0];
    //   await this._legalizacionService.updateProject(difference.PRY_ID, difference.PRY_Nombre, 2).toPromise();
    // }
    // console.log(this.projectActive);

    // AppComponent.displayLoading = false;

  }

}
