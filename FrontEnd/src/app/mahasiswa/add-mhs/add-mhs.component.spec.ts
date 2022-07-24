import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMhsComponent } from './add-mhs.component';

describe('AddMhsComponent', () => {
  let component: AddMhsComponent;
  let fixture: ComponentFixture<AddMhsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMhsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
