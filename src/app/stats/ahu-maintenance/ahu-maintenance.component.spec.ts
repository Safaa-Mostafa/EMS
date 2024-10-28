import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhuMaintenanceComponent } from './ahu-maintenance.component';

describe('AhuMaintenanceComponent', () => {
  let component: AhuMaintenanceComponent;
  let fixture: ComponentFixture<AhuMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AhuMaintenanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhuMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
