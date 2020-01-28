import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesRegisterComponent } from './categories-register.component';

describe('CategoriesRegisterComponent', () => {
  let component: CategoriesRegisterComponent;
  let fixture: ComponentFixture<CategoriesRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
