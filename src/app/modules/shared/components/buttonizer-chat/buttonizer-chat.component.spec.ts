import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonizerChatComponent } from './buttonizer-chat.component';

describe('ButtonizerChatComponent', () => {
  let component: ButtonizerChatComponent;
  let fixture: ComponentFixture<ButtonizerChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonizerChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonizerChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
