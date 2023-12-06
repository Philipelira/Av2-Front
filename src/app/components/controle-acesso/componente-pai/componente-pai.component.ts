import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  template: `
    <h2>Componente Pai</h2>
    <ul>
      <li *ngFor="let item of listaItens">{{ item }}</li>
    </ul>
    <app-componente-filho [itens]="listaItens"></app-componente-filho>
  `,
})
export class ComponentePaiComponent {
  listaItens: string[] = ['Item 1', 'Item 2', 'Item 3'];
}
