import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalizacionComponent } from './legalizacion.component';
import { LegalizacionRoutingModule } from './legalizacion-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from './customerservice';
import { MatCardModule } from '@angular/material/card';
import { LegalizacionService } from 'src/app/services/legalizacion.service';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ExcelExportService } from 'src/app/services/excel.services';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { PipeModule } from 'src/app/pipes/pipes.module';
import { UtilsService } from 'src/app/services/utils.services';
import { TokenInterceptor } from 'src/app/services/interceptor.service';


@NgModule({
  declarations: [
    LegalizacionComponent
  ],
  imports: [
    CommonModule,
    LegalizacionRoutingModule,
    SharedModule,

    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    DialogModule,
    MatDialogModule,
    PipeModule
  ],
  providers: [
    CustomerService,
    ExcelExportService,
    LegalizacionService,
    UtilsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class LegalizacionModule { }
