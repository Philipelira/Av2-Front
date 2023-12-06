import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleAcessoComponent } from './controle-acesso.component';

describe('ControleAcessoComponent', () => {
  let component: ControleAcessoComponent;
  let fixture: ComponentFixture<ControleAcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControleAcessoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
