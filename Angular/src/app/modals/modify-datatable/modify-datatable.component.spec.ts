import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDatatableComponent } from './modify-datatable.component';

describe('ModifyDatatableComponent', () => {
  let component: ModifyDatatableComponent;
  let fixture: ComponentFixture<ModifyDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
