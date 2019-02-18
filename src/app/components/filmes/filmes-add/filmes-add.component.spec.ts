import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesAddComponent } from './filmes-add.component';

describe('FilmesAddComponent', () => {
  let component: FilmesAddComponent;
  let fixture: ComponentFixture<FilmesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
