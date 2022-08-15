import { EventEmitter, Output, ViewChild } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import * as $ from 'jquery';
import { Subscription, Observable } from 'rxjs';
import { UtilsService } from 'src/app/services/utils.services';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {


  @Input()
  public headers: any;

  @Input()
  filtersOptions: any = [];

  @Input()
  public searchCondition: any = {};

  @Input()
  public camposFecha: any = []

  @Input()
  public displayLoading: boolean;


  @Output() newItemEvent = new EventEmitter<string>();
  @Output() removeItemEvent = new EventEmitter<string>();
  @Output() searchFilterItemEvent = new EventEmitter<string>();
  @Output() clearSearchFilterItemEvent = new EventEmitter<string>();


  private eventsSubscription: Subscription;
  @Input() eventsClear: Observable<void>;

  private eventsSearchFilterSubscription: Subscription;
  @Input() eventsSearchFilter: Observable<void>;

  searchText: FormControl;
  checkedAll: FormControl = new FormControl(false);

  @ViewChild('matSelect') matSelect: MatSelect;

  isShowSelect: any = false;

  customHeaders = '';

  public previusSelected: any = []


  constructor(
    private _utilsService: UtilsService
  ) {
    this.checkedAll.valueChanges.subscribe((x: any) => {
      console.log('###x', x);
      console.log('###searchCondition ', this.searchCondition);

      if (x) {
        this.searchCondition[this.headers] = [];
        for (let index = 0; index < this.filtersOptions[this.headers].length; index++) {
          const element = this.filtersOptions[this.headers][index];
          this.searchCondition[this.headers][index] = element;
        }
      } else {
        this.searchCondition = {};
      }
    });


    this.searchText = new FormControl();
    this.searchText.valueChanges.subscribe((x: string) => {
      console.log('x', x);
      if (x.length > 0) {
        let idFormat = this.headers;
        if (/ /g.test(idFormat)) {
          if(String(idFormat).includes('=')){
            idFormat = `(${idFormat})`;
          }else{
            idFormat = `[${idFormat}]`;
          }
        }
        let searchTemp = ` AND (${idFormat} LIKE  ''${x}%'') `;
        console.log(searchTemp);
        // this.searchTemp = searchTemp;
        // this.page = 1;
        // this.getDataTable();
        let request: any = {
          id: this.headers,
          search: searchTemp
        }
        this.searchFilterItemEvent.emit(request);
      } else if (x.length < 1 && this.searchText != null) {
        console.log('aquiii', this.searchText);
        this.clearSearchFilterItemEvent.emit(this.headers);
        // this.searchTemp = '';
        // this.page = 1;
        // this.getDataTable();
      }
    });

  }

  ngOnInit(): void {

    this.customHeaders = this._utilsService.getAliasFromColumnCalculate(this.headers);
    this.eventsSubscription = this.eventsClear.subscribe(() => this.remoteClearFilter(this.headers));

    this.eventsSearchFilterSubscription = this.eventsSearchFilter.subscribe(() => this.updateOptionList());

  }

  ngAfterViewInit(): void {
    this.matSelect.openedChange.subscribe(isOpen => {
      if (isOpen) {
        console.log('open', isOpen);
      } else {
        console.log('close', isOpen);
      }
      this.isShowSelect = isOpen;
    })

    this.updateOptionList();

  }


  applyFilter(id: any) {
    let idTemp = this.removeWhiteSpaces(id);
    idTemp = this._utilsService.getAliasFromColumnCalculate(idTemp);
    $('#' + idTemp).hide();
    console.log('searchCondition', this.searchCondition);
    this.newItemEvent.emit(this.searchCondition);
  }

  clearFilter(id: any) {
    let idTemp = this.removeWhiteSpaces(id);
    idTemp = this._utilsService.getAliasFromColumnCalculate(idTemp);
    $('#' + idTemp).hide();
    this.searchCondition = {};
    this.removeItemEvent.emit(id);
  }


  remoteClearFilter(id: any) {
    id = this.removeWhiteSpaces(id);
    id = this._utilsService.getAliasFromColumnCalculate(id);
    $('#' + id).hide();
    this.searchCondition = {};
  }

  clear() {
    this.searchText.setValue('');
  }

  close(id) {
    id = this.removeWhiteSpaces(id);
    id = this._utilsService.getAliasFromColumnCalculate(id);
    $('#' + id).hide();
  }

  removeWhiteSpaces(txt) {
    return txt.replace(/ /g, '');
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
    this.eventsSearchFilterSubscription.unsubscribe();
  }

  select(evt) {

    console.log('evt.value', evt);
    if (evt.value != null) {
      // this.previusSelected = this.previusSelected.filter(value => evt.value.includes(value));
      // console.log('filteredArray',this.previusSelected);

      this.previusSelected = this.previusSelected.concat(evt.value);
      this.previusSelected = this.previusSelected.filter((item, index) => { return (this.previusSelected.indexOf(item) == index) });
      console.log(this.previusSelected);


    }

  }


  updateOptionList() {
    if (this.filtersOptions[this.headers] != null) {
      console.log('##updateOptionList', this.filtersOptions[this.headers]);
      console.log('##this.previusSelected', this.previusSelected);

      this.filtersOptions[this.headers] = this.filtersOptions[this.headers].concat(this.previusSelected);
      this.filtersOptions[this.headers] = this.filtersOptions[this.headers].filter((item, index) => { return (this.filtersOptions[this.headers].indexOf(item) == index) });
      console.log(this.filtersOptions[this.headers]);

      let temp: [] = this.filtersOptions[this.headers];
      this.filtersOptions[this.headers] = temp.sort(function (a: string, b: string) {
        return ('' + a).localeCompare(b);
      });

      console.log('##fin updateOptionList', this.filtersOptions[this.headers]);

    }
  }

}
