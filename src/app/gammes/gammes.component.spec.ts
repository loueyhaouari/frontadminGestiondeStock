import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GammesComponent } from './gammes.component';

describe('GammesComponent', () => {
  let component: GammesComponent;
  let fixture: ComponentFixture<GammesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GammesComponent]
    });
    fixture = TestBed.createComponent(GammesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
