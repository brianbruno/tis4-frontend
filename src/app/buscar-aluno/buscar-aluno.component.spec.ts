import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAlunoComponent } from './buscar-aluno.component';

describe('BuscarAlunoComponent', () => {
  let component: BuscarAlunoComponent;
  let fixture: ComponentFixture<BuscarAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
