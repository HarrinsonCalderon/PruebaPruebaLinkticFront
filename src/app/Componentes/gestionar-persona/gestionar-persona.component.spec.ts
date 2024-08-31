import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarPersonaComponent } from './gestionar-persona.component';

describe('GestionarPersonaComponent', () => {
  let component: GestionarPersonaComponent;
  let fixture: ComponentFixture<GestionarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
