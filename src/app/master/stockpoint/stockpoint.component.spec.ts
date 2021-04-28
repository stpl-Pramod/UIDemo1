import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockpointComponent } from './stockpoint.component';

describe('StockpointComponent', () => {
  let component: StockpointComponent;
  let fixture: ComponentFixture<StockpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockpointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
