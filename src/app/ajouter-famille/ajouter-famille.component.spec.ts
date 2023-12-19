import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFamilleComponent } from './ajouter-famille.component';

describe('AjouterFamilleComponent', () => {
  let component: AjouterFamilleComponent;
  let fixture: ComponentFixture<AjouterFamilleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterFamilleComponent]
    });
    fixture = TestBed.createComponent(AjouterFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
