import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMhsComponent } from './show-mhs.component';

describe('ShowMhsComponent', () => {
  let component: ShowMhsComponent;
  let fixture: ComponentFixture<ShowMhsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMhsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
