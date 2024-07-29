import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelecComponent } from './homelec.component';

describe('HomelecComponent', () => {
  let component: HomelecComponent;
  let fixture: ComponentFixture<HomelecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomelecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomelecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
