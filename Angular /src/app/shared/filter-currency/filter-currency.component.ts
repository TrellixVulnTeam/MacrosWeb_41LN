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
  selector: 'app-filter-currency',
  templateUrl: './filter-currency.component.html',
  styleUrls: ['./filter-currency.component.scss']
})
export class FilterCurrencyComponent implements OnInit {


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
        valueSearchField: [],
        valueSearchField2: []
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
    idTemp = String(idTemp).replace('+','-');
    $('#' + idTemp + '-date').hide();


    console.log(this.form.controls['valueSearchField'].value);
    console.log(this.searchType);

    console.log('#####id', id);
    let columnCalculate : any = this._utilsService.getOriginalNameFromColumnCalculate(id);
    columnCalculate = columnCalculate.replaceAll(';',',');
    console.log('#####columnCalculate', columnCalculate);

    console.log('### revisar espacios');
    if (/\s/g.test(columnCalculate)) {
      console.log('titulo con espacio');
      columnCalculate = `[${columnCalculate}]`;
    }

    console.log('searchCondition', this.searchCondition);
    if (this.searchType == 1) {
      console.log(` AND ${columnCalculate} = ''${this.form.controls['valueSearchField'].value}''  `);
      this.newItemEvent.emit({ field: id, query: ` AND ${columnCalculate} = ''${this.form.controls['valueSearchField'].value}''  ` });
    } else if (this.searchType == 2) {
      console.log(` AND ${columnCalculate} <> ''${this.form.controls['valueSearchField'].value}''  `);
      this.newItemEvent.emit({ field: id, query: ` AND ${columnCalculate} <> ''${this.form.controls['valueSearchField'].value}''  ` });
    } else if (this.searchType == 3) {
      console.log(` AND ${columnCalculate} <= ''${this.form.controls['valueSearchField'].value}''  `);
      this.newItemEvent.emit({ field: id, query: ` AND ${columnCalculate} < ''${this.form.controls['valueSearchField'].value}''  ` });
    } else if (this.searchType == 4) {
      console.log(` AND ${columnCalculate} >= ''${this.form.controls['valueSearchField'].value}''  `);
      this.newItemEvent.emit({ field: id, query: ` AND ${columnCalculate} > ''${this.form.controls['valueSearchField'].value}''  ` });
    } else if (this.searchType == 5 && this.form.controls['valueSearchField2'].value != null) {
      console.log(` AND  (${columnCalculate} BETWEEN ''${this.form.controls['valueSearchField'].value}''  AND ''${this.form.controls['valueSearchField2'].value}'' ) `);
      this.newItemEvent.emit({ field: id, query: ` AND  (${columnCalculate} BETWEEN ''${this.form.controls['valueSearchField'].value}''  AND ''${this.form.controls['valueSearchField2'].value}'' ) ` });
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
    idTemp = String(idTemp).replace('+','-');
    $('#' + idTemp + '-date').hide();
    this.form.controls['valueSearchField'].setValue(null);
    this.form.controls['valueSearchField2'].setValue(null);
    this.removeItemEvent.emit(id);
  }

  remoteClearFilter(id: any) {
    id = this._utilsService.getAliasFromColumnCalculate(id);
    id = this.removeWhiteSpaces(id);
    id = String(id).replace('+','-');
    $('#' + id + '-date').hide();
    this.form.controls['valueSearchField'].setValue(null);
    this.form.controls['valueSearchField2'].setValue(null);
  }


  clear() {
    this.searchText = "";
  }

  close(id) {
    id = this._utilsService.getAliasFromColumnCalculate(id);
    id = this.removeWhiteSpaces(id);
    id = String(id).replace('+','-');
    $('#' + id + '-date').hide();
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  removeWhiteSpaces(txt) {
    return txt.replace(/ /g, '');
  }


}
