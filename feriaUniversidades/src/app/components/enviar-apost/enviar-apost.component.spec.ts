import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarAPostComponent } from './enviar-apost.component';

describe('EnviarAPostComponent', () => {
  let component: EnviarAPostComponent;
  let fixture: ComponentFixture<EnviarAPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnviarAPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnviarAPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
