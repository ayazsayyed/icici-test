import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomCtaComponent } from './bottom-cta.component';

describe('BottomCtaComponent', () => {
  let component: BottomCtaComponent;
  let fixture: ComponentFixture<BottomCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomCtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
