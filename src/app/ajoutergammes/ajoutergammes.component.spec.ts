import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutergammesComponent } from './ajoutergammes.component';

describe('AjoutergammesComponent', () => {
  let component: AjoutergammesComponent;
  let fixture: ComponentFixture<AjoutergammesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutergammesComponent]
    });
    fixture = TestBed.createComponent(AjoutergammesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
