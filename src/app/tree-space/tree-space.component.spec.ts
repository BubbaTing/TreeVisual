import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeSpaceComponent } from './tree-space.component';

describe('TreeSpaceComponent', () => {
  let component: TreeSpaceComponent;
  let fixture: ComponentFixture<TreeSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
