import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesEditComponent } from './filmes-edit.component';

describe('FilmesEditComponent', () => {
  let component: FilmesEditComponent;
  let fixture: ComponentFixture<FilmesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
