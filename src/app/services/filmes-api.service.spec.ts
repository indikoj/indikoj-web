import { TestBed } from '@angular/core/testing';

import { FilmesApiService } from './filmes-api.service';

describe('FilmesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmesApiService = TestBed.get(FilmesApiService);
    expect(service).toBeTruthy();
  });
});
