import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeseccComponent } from './homesecc.component';

describe('HomeseccComponent', () => {
  let component: HomeseccComponent;
  let fixture: ComponentFixture<HomeseccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeseccComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeseccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
