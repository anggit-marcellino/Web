import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMhsComponent } from './edit-mhs.component';

describe('EditMhsComponent', () => {
  let component: EditMhsComponent;
  let fixture: ComponentFixture<EditMhsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMhsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
