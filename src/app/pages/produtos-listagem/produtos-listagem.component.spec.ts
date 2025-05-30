import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosListagemComponent } from './produtos-listagem.component';

describe('ProdutosListagemComponent', () => {
  let component: ProdutosListagemComponent;
  let fixture: ComponentFixture<ProdutosListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosListagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
