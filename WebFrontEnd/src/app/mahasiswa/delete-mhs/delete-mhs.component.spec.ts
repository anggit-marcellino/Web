import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMhsComponent } from './delete-mhs.component';

describe('DeleteMhsComponent', () => {
  let component: DeleteMhsComponent;
  let fixture: ComponentFixture<DeleteMhsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMhsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
