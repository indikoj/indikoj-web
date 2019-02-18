import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoServicosEditComponent } from './tipo-servicos-edit.component';

describe('TipoServicosEditComponent', () => {
  let component: TipoServicosEditComponent;
  let fixture: ComponentFixture<TipoServicosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoServicosEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoServicosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
