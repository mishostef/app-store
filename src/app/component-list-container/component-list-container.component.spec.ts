import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentListContainerComponent } from './component-list-container.component';

describe('ComponentListContainerComponent', () => {
  let component: ComponentListContainerComponent;
  let fixture: ComponentFixture<ComponentListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
