import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItsmartsComponent } from './itsmarts.component';

describe('ItsmartsComponent', () => {
  let component: ItsmartsComponent;
  let fixture: ComponentFixture<ItsmartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItsmartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItsmartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
