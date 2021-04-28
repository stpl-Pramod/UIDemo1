import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarryregisterComponent } from './quarryregister.component';

describe('QuarryregisterComponent', () => {
  let component: QuarryregisterComponent;
  let fixture: ComponentFixture<QuarryregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuarryregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarryregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
