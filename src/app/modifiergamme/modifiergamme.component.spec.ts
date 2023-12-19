import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiergammeComponent } from './modifiergamme.component';

describe('ModifiergammeComponent', () => {
  let component: ModifiergammeComponent;
  let fixture: ComponentFixture<ModifiergammeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifiergammeComponent]
    });
    fixture = TestBed.createComponent(ModifiergammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
