import { EventEmitter, Output, ViewChild } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { UtilsService } from 'src/app/services/utils.services';
import { DateValidator } from 'src/app/utils/date-validator.component';

@Component({
  selector: 'app-filter-date',
  templateUrl: './filter-date.component.html',
  styleUrls: ['./filter-date.component.scss']
})
export class FilterDateComponent implements OnInit {


  @Input()
  public headers: any;

  @Input()
  filtersOptions: any = [];

  @Input()
  public searchCondition: any = {};

  @Input()
  public camposFecha: any = []

  @Output() newItemEvent = new EventEmitter<any>();
  @Output() removeItemEvent = new EventEmitter<string>();

  private eventsSubscription: Subscription;
  @Input() eventsClear: Observable<void>;

  searchText: string = "";
  checkedAll: FormControl = new FormControl(false);

  @ViewChild('matSelect') matSelect: MatSelect;

  isShowSelect: any = false;

  searchType: any = 1;
  form: FormGroup;

  customHeaders = '';


  constructor(
    private formBuilder: FormBuilder,
    private _utilsService: UtilsService,
  ) {
    this.form = this.formBuilder.group(
      {
        dateSearchField: [],
        dateSearchField2: [],
      }
    );
  }

  ngOnInit(): void {
    this.customHeaders = this._utilsService.getAliasFromColumnCalculate(this.headers);
    this.eventsSubscription = this.eventsClear.subscribe(() => this.remoteClearFilter(this.headers));
  }

  applyFilter(id: any) {
    let idTemp = this.removeWhiteSpaces(id);
    idTemp = this._utilsService.getAliasFromColumnCalculate(idTemp);
    $('#' + idTemp + '-date').hide();

    // if (/\s/g.test(id)) {
    //   console.log('titulo con espacio');
    //   id = `[${id}]`;
    // }

    console.log(this.form.controls['dateSearchField'].value);
    console.log(this.searchType);
    let fechaFormat: Date = new Date(this.form.controls['dateSearchField'].value);
    let fechaFormatStr = fechaFormat.getFullYear() + '-' + ((fechaFormat.getMonth() + 1) < 10 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate());

    let fechaFormatStr2 = null;
    if (this.searchType == 5) {
      let fechaFormat2: Date = new Date(this.form.controls['dateSearchField2'].value);
      fechaFormatStr2 = fechaFormat2.getFullYear() + '-' + ((fechaFormat2.getMonth() + 1) < 10 ? '0' + (fechaFormat2.getMonth() + 1) : (fechaFormat2.getMonth() + 1)) + '-' + (fechaFormat2.getDate() < 10 ? '0' + fechaFormat2.getDate() : fechaFormat2.getDate());
    }

    console.log('#####id', id);
    let columnCalculate = this._utilsService.getOriginalNameFromColumnCalculate(id);
    console.log('#####columnCalculate', columnCalculate);

    console.log('### revisar espacios');
    if (/\s/g.test(columnCalculate)) {
      console.log('titulo con espacio');
      columnCalculate = `[${columnCalculate}]`;
    }
    console.log('searchCondition', this.searchCondition);
    if (this.searchType == 1) {
      console.log(` AND CAST(${columnCalculate} AS DATE) = CAST(''${fechaFormatStr}'' AS DATE) `);
      this.newItemEvent.emit({ field: id, query: ` AND CAST(${columnCalculate} AS DATE) = CAST(''${fechaFormatStr}'' AS DATE) ` });
    } else if (this.searchType == 2) {
      console.log(` AND CAST(${columnCalculate} AS DATE) <> CAST(''${fechaFormatStr}'' AS DATE) `);
      this.newItemEvent.emit({ field: id, query: ` AND CAST(${columnCalculate} AS DATE) <> CAST(''${fechaFormatStr}'' AS DATE) ` });
    } else if (this.searchType == 3) {
      console.log(` AND CAST(${columnCalculate} AS DATE) <= CAST(''${fechaFormatStr}'' AS DATE) `);
      this.newItemEvent.emit({ field: id, query: ` AND CAST(${columnCalculate} AS DATE) <= CAST(''${fechaFormatStr}'' AS DATE) ` });
    } else if (this.searchType == 4) {
      console.log(` AND CAST(${columnCalculate} AS DATE) >= CAST(''${fechaFormatStr}'' AS DATE) `);
      this.newItemEvent.emit({ field: id, query: ` AND CAST(${columnCalculate} AS DATE) >= CAST(''${fechaFormatStr}'' AS DATE) ` });
    } else if (this.searchType == 5 && fechaFormatStr2 != null) {
      console.log(` AND  (CAST(${columnCalculate} AS DATE) BETWEEN CAST(''${fechaFormatStr}'' AS DATE) AND CAST(''${fechaFormatStr2}'' AS DATE)) `);
      this.newItemEvent.emit({ field: id, query: ` AND  (CAST(${columnCalculate} AS DATE) BETWEEN CAST(''${fechaFormatStr}'' AS DATE) AND CAST(''${fechaFormatStr2}'' AS DATE)) ` });
    } else if (this.searchType == 6) {
      console.log(` AND ${columnCalculate} IS NULL `);
      this.newItemEvent.emit({ field: id, query: ` AND (${columnCalculate} IS NULL OR ${columnCalculate} = '''') ` });
    } else if (this.searchType == 7) {
      console.log(` AND ${columnCalculate} IS NOT NULL `);
      this.newItemEvent.emit({ field: id, query: ` AND ${columnCalculate} IS NOT NULL ` });
    } else {
      this.newItemEvent.emit();
    }

    // this.newItemEvent.emit(this.searchCondition);
  }

  clearFilter(id: any) {
    let idTemp = this.removeWhiteSpaces(id);
    idTemp = this._utilsService.getAliasFromColumnCalculate(idTemp);
    $('#' + idTemp + '-date').hide();
    this.form.controls['dateSearchField'].setValue(null);
    this.form.controls['dateSearchField2'].setValue(null);
    this.removeItemEvent.emit(id);
  }

  remoteClearFilter(id: any) {
    id = this._utilsService.getAliasFromColumnCalculate(id);
    id = this.removeWhiteSpaces(id);
    $('#' + id + '-date').hide();
    this.form.controls['dateSearchField'].setValue(null);
    this.form.controls['dateSearchField2'].setValue(null);
  }


  clear() {
    this.searchText = "";
  }

  close(id) {
    id = this._utilsService.getAliasFromColumnCalculate(id);
    id = this.removeWhiteSpaces(id);
    $('#' + id + '-date').hide();
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  removeWhiteSpaces(txt) {
    return txt.replace(/ /g, '');
  }


}
