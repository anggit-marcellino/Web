import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDosComponent } from './show-dos.component';

describe('ShowDosComponent', () => {
  let component: ShowDosComponent;
  let fixture: ComponentFixture<ShowDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
