import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCuidadorComponent } from './perfil-cuidador.component';

describe('PerfilCuidadorComponent', () => {
  let component: PerfilCuidadorComponent;
  let fixture: ComponentFixture<PerfilCuidadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilCuidadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilCuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
