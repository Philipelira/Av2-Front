import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent {
  contadorVar = 0;

  maisUm() {
    this.contadorVar++;
  }

  menosUm() {
    if (this.contadorVar > 0) {
      this.contadorVar--;
    }
  }
}
