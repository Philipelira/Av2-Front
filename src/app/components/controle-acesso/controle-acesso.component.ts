import { Component } from '@angular/core';

@Component({
  selector: 'app-controle-acesso',
  templateUrl: './controle-acesso.component.html',
  styleUrls: ['./controle-acesso.component.css']
})
export class ControleAcessoComponent {
  tipoUsuarioSelecionado: string = ''; 

  selecionarTipoUsuario(tipo: string): void {
    this.tipoUsuarioSelecionado = tipo;
  }
}
