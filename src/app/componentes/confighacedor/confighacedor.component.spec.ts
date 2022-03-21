import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfighacedorComponent } from './confighacedor.component';

describe('ConfighacedorComponent', () => {
  let component: ConfighacedorComponent;
  let fixture: ComponentFixture<ConfighacedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfighacedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfighacedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
