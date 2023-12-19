import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesProduitsComponent } from './statistiques-produits.component';

describe('StatistiquesProduitsComponent', () => {
  let component: StatistiquesProduitsComponent;
  let fixture: ComponentFixture<StatistiquesProduitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatistiquesProduitsComponent]
    });
    fixture = TestBed.createComponent(StatistiquesProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
