import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDosComponent } from './delete-dos.component';

describe('DeleteDosComponent', () => {
  let component: DeleteDosComponent;
  let fixture: ComponentFixture<DeleteDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
