import { TestBed } from '@angular/core/testing';

import { PicGetter } from './pic-getter';

describe('PicGetter', () => {
  let service: PicGetter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicGetter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
