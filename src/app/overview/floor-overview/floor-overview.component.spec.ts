import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorOverviewComponent } from './floor-overview.component';

describe('FloorOverviewComponent', () => {
  let component: FloorOverviewComponent;
  let fixture: ComponentFixture<FloorOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloorOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloorOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
