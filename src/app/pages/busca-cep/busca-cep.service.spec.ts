/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BuscaCepService } from './busca-cep.service';

describe('Service: BuscaCep', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuscaCepService]
    });
  });

  it('should ...', inject([BuscaCepService], (service: BuscaCepService) => {
    expect(service).toBeTruthy();
  }));
});
