import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MurohacedorComponent } from './murohacedor.component';

describe('MurohacedorComponent', () => {
  let component: MurohacedorComponent;
  let fixture: ComponentFixture<MurohacedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MurohacedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MurohacedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
