import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFTDComponent } from './formulario-ftd.component';

describe('FormularioFTDComponent', () => {
  let component: FormularioFTDComponent;
  let fixture: ComponentFixture<FormularioFTDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioFTDComponent]
    });
    fixture = TestBed.createComponent(FormularioFTDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
