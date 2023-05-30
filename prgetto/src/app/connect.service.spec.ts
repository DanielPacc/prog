import { TestBed } from '@angular/core/testing';

import { PhpMyAdminService } from './connect.service';

describe('ConnectService', () => {
  let service: PhpMyAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhpMyAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
