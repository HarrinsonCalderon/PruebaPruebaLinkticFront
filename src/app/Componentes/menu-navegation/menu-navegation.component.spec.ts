import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavegationComponent } from './menu-navegation.component';

describe('MenuNavegationComponent', () => {
  let component: MenuNavegationComponent;
  let fixture: ComponentFixture<MenuNavegationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNavegationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuNavegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
