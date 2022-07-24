import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDosComponent } from './edit-dos.component';

describe('EditDosComponent', () => {
  let component: EditDosComponent;
  let fixture: ComponentFixture<EditDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
