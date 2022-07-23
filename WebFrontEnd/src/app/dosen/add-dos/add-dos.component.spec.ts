import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDosComponent } from './add-dos.component';

describe('AddDosComponent', () => {
  let component: AddDosComponent;
  let fixture: ComponentFixture<AddDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
