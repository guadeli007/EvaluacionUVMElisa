import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmProspectosComponent } from './frm-prospectos.component';

describe('FrmProspectosComponent', () => {
  let component: FrmProspectosComponent;
  let fixture: ComponentFixture<FrmProspectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrmProspectosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrmProspectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
