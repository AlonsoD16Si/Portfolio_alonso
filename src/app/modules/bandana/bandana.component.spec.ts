import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandanaComponent } from './bandana.component';

describe('BandanaComponent', () => {
  let component: BandanaComponent;
  let fixture: ComponentFixture<BandanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BandanaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BandanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
