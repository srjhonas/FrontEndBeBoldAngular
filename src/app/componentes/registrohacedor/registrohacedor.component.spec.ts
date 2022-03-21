import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrohacedorComponent } from './registrohacedor.component';

describe('RegistrohacedorComponent', () => {
  let component: RegistrohacedorComponent;
  let fixture: ComponentFixture<RegistrohacedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrohacedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrohacedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
