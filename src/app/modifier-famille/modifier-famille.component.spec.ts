import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFamilleComponent } from './modifier-famille.component';

describe('ModifierFamilleComponent', () => {
  let component: ModifierFamilleComponent;
  let fixture: ComponentFixture<ModifierFamilleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierFamilleComponent]
    });
    fixture = TestBed.createComponent(ModifierFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
