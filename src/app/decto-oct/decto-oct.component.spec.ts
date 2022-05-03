import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DectoOctComponent } from './decto-oct.component';

describe('DectoOctComponent', () => {
  let component: DectoOctComponent;
  let fixture: ComponentFixture<DectoOctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DectoOctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DectoOctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
