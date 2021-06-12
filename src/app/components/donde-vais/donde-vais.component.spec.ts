import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DondeVaisComponent } from './donde-vais.component';

describe('DondeVaisComponent', () => {
  let component: DondeVaisComponent;
  let fixture: ComponentFixture<DondeVaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DondeVaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DondeVaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
