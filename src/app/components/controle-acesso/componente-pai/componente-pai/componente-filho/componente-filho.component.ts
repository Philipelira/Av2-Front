import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  template: `
    <h3>Componente Filho</h3>
    <ul>
      <li *ngFor="let item of itens">{{ item }}</li>
    </ul>
  `,
})
export class ComponenteFilhoComponent {
  @Input() itens: string[] = [];
}
