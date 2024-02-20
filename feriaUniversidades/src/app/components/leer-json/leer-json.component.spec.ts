import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerJSONComponent } from './leer-json.component';

describe('LeerJSONComponent', () => {
  let component: LeerJSONComponent;
  let fixture: ComponentFixture<LeerJSONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeerJSONComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeerJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
