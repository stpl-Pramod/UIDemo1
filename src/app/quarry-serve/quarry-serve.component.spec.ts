import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarryServeComponent } from './quarry-serve.component';

describe('QuarryServeComponent', () => {
  let component: QuarryServeComponent;
  let fixture: ComponentFixture<QuarryServeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuarryServeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarryServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
