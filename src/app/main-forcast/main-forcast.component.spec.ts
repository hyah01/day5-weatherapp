import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainForcastComponent } from './main-forcast.component';

describe('MainForcastComponent', () => {
  let component: MainForcastComponent;
  let fixture: ComponentFixture<MainForcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainForcastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
