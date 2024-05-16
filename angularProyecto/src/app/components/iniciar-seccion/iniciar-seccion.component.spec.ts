import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSeccionComponent } from './iniciar-seccion.component';

describe('IniciarSeccionComponent', () => {
  let component: IniciarSeccionComponent;
  let fixture: ComponentFixture<IniciarSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniciarSeccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IniciarSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
