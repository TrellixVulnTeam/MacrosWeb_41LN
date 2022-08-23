import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationService } from 'primeng/api';
import { AppComponent } from 'src/app/app.component';
import { LegalizacionService } from 'src/app/services/legalizacion.service';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {

  usersList: any = [];
  total: number = 0;

  rolesList = [];

  displayedColumns: string[] = ['usuario', 'rol'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _legalizacionService: LegalizacionService,
    private _confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.getRoles();
  }

  getUsers() {
    AppComponent.displayLoading = true;

    this._legalizacionService.getUsers()
      .subscribe(
        (response: any) => {
          this.usersList = response.data;
          this.total = this.usersList.length;

          this.dataSource = new MatTableDataSource(this.usersList);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

          AppComponent.displayLoading = false;
        }, err => {
          console.log(err);
          AppComponent.displayLoading = false;
        }
      )
  }


  getRoles() {
    AppComponent.displayLoading = true;

    this._legalizacionService.getRoles()
      .subscribe(
        (response: any) => {
          this.rolesList = response.data;
          AppComponent.displayLoading = false;
        }, err => {
          console.log(err);
          AppComponent.displayLoading = false;
        }
      )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  changeRole(evt, userId) {
    let role = this.getRoleByName(evt.value);

    if (role != null && role != undefined) {


      this._confirmationService.confirm({
        message: 'Estas seguro que deseas actualizar este campo?',
        accept: () => {
          AppComponent.displayLoading = true;

          this._legalizacionService.addOrUpdateRole(userId, role.Id, 2)
            .subscribe(
              (response: any) => {
                AppComponent.displayLoading = false;
              }, err => {
                console.log(err);
                AppComponent.displayLoading = false;
              }
            )
        },
        reject: () => {
          this._confirmationService.close();
        }
      });

    }

  }

  getRoleByName(name) {
    for (let index = 0; index < this.rolesList.length; index++) {
      const element = this.rolesList[index];
      if(element.Name == name){
        return element;
      }
    }
    return null;
  }

}
