import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoServicosAddComponent } from './tipo-servicos-add.component';

describe('TipoServicosAddComponent', () => {
  let component: TipoServicosAddComponent;
  let fixture: ComponentFixture<TipoServicosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoServicosAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoServicosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
