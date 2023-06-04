import { TestBed } from '@angular/core/testing';

import { connect } from './connect.service';

describe('ConnectService', () => {
  let service: connect;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(connect);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

