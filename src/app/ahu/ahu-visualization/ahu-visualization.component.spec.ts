import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhuVisualizationComponent } from './ahu-visualization.component';

describe('AhuVisualizationComponent', () => {
  let component: AhuVisualizationComponent;
  let fixture: ComponentFixture<AhuVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AhuVisualizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhuVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
