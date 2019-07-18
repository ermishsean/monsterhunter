import { TestBed } from '@angular/core/testing';

import { MonsterserviceService } from './monsterservice.service';

describe('MonsterserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonsterserviceService = TestBed.get(MonsterserviceService);
    expect(service).toBeTruthy();
  });
});
