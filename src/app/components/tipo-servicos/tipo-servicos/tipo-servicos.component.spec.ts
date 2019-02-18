import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoServicosComponent } from './tipo-servicos.component';

describe('TipoServicosComponent', () => {
  let component: TipoServicosComponent;
  let fixture: ComponentFixture<TipoServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
