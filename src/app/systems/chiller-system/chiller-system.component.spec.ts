import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChillerSystemComponent } from './chiller-system.component';

describe('ChillerSystemComponent', () => {
  let component: ChillerSystemComponent;
  let fixture: ComponentFixture<ChillerSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChillerSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChillerSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
