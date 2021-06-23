import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInCuidadoresComponent } from './log-in-cuidadores.component';

describe('LogInCuidadoresComponent', () => {
  let component: LogInCuidadoresComponent;
  let fixture: ComponentFixture<LogInCuidadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInCuidadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInCuidadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
