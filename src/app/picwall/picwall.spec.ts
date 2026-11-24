import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Picwall } from './picwall';

describe('Picwall', () => {
  let component: Picwall;
  let fixture: ComponentFixture<Picwall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Picwall],
    }).compileComponents();

    fixture = TestBed.createComponent(Picwall);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
