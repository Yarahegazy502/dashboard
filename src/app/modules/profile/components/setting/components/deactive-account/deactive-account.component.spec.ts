import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactiveAccountComponent } from './deactive-account.component';

describe('DeactiveAccountComponent', () => {
  let component: DeactiveAccountComponent;
  let fixture: ComponentFixture<DeactiveAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeactiveAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeactiveAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
