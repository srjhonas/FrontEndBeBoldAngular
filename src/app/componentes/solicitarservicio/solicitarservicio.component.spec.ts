import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarservicioComponent } from './solicitarservicio.component';

describe('SolicitarservicioComponent', () => {
  let component: SolicitarservicioComponent;
  let fixture: ComponentFixture<SolicitarservicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarservicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
