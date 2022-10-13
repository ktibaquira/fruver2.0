import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionCategoriaComponent } from './descripcion-categoria.component';

describe('DescripcionCategoriaComponent', () => {
  let component: DescripcionCategoriaComponent;
  let fixture: ComponentFixture<DescripcionCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescripcionCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
