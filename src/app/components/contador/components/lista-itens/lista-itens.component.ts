import { Component } from '@angular/core';

interface TodoItem {
  texto: string;
  concluido: boolean;
}

@Component({
  selector: 'app-lista-itens',
  templateUrl: './lista-itens.component.html',
  styleUrls: ['./lista-itens.component.css']
})
export class ListItemsComponent {
  itemLista: TodoItem[] = [];
  novoItemTexto: string = '';

  adicionarItem(): void {
    if (this.novoItemTexto.trim() !== '') {
      const novoItem: TodoItem = { texto: this.novoItemTexto, concluido: false };
      this.itemLista.push(novoItem);
      this.novoItemTexto = ''; 
    }
  }

  removerItem(index: number): void {
    this.itemLista.splice(index, 1);
  }

  concluirItem(index: number): void {
    this.itemLista[index].concluido = !this.itemLista[index].concluido;
  }

  onInputChange(event: Event): void {
    
  }
}
