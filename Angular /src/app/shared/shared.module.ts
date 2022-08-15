import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutComponent } from './layout/layout/layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SpinnerComponent } from './spinner/spinner.component';
import { FilterComponent } from './filter/filter.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { PipeModule } from '../pipes/pipes.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FilterDateComponent } from './filter-date/filter-date.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { FilterCurrencyComponent } from './filter-currency/filter-currency.component';
import { DialogModule } from 'primeng/dialog';
import { UtilsService } from '../services/utils.services';
import { MultilevelMenuService, NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';

@NgModule({
  declarations: [
    LayoutComponent,
    SpinnerComponent,
    FilterComponent,
    FilterDateComponent,
    FilterCurrencyComponent
  ],
  imports: [
    MatListModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    CommonModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    DialogModule,
    NgMaterialMultilevelMenuModule
  ],
  exports: [
    LayoutComponent,
    SpinnerComponent,
    FilterComponent,
    FilterDateComponent,
    FilterCurrencyComponent,
  ],
  providers: [
    {
      provide: MAT_DATE_FORMATS, useValue: {
        parse: {
          dateInput: 'DD-MM-YYYY',
        },
        display: {
          dateInput: 'DD-MM-YYYY',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
        },
      }
    },
    UtilsService,
    MultilevelMenuService
  ]
})
export class SharedModule { }


