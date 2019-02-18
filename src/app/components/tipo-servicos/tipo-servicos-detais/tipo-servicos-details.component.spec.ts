import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoServicosDetailsComponent } from './tipo-servicos-details.component';

describe('TipoServicosDetaisComponent', () => {
  let component: TipoServicosDetailsComponent;
  let fixture: ComponentFixture<TipoServicosDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoServicosDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoServicosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
