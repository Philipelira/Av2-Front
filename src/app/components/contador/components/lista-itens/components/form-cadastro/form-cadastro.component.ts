import { Component } from '@angular/core';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  notificacao: string = '';

  cadastrar(): void {
    if (this.nome.trim() !== '' && this.email.trim() !== '' && this.senha.trim() !== '') {
      this.notificacao = `Olá, ${this.nome}, seu cadastro foi realizado com sucesso.`;
    } else {
      this.notificacao = 'Olá, informe os campos corretamente.';
    }
  }
}
