import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataLoadComponent } from './data-load.component';
import { DataLoadRoutingModule } from './data-load-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FileUploadModule } from 'primeng/fileupload';
import { LegalizacionService } from 'src/app/services/legalizacion.service';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DataLoadComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DataLoadRoutingModule,
    SharedModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    FileUploadModule,
    ConfirmDialogModule,
    HttpClientModule
  ],
  providers:[
    LegalizacionService
  ]
})
export class DataLoadModule { }
