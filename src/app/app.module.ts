import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Importe o módulo FormsModule
import { MatButtonModule } from '@angular/material/button'; // Importe o módulo de botões do Angular Material



import { AppComponent } from './app.component';
import { ControleAcessoComponent } from './components/controle-acesso/controle-acesso.component';
import { ComponentePaiComponent } from './components/controle-acesso/componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './components/controle-acesso/componente-pai/componente-pai/componente-filho/componente-filho.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ListItemsComponent } from './components/contador/components/lista-itens/lista-itens.component';
import { FormCadastroComponent } from './components/contador/components/lista-itens/components/form-cadastro/form-cadastro.component'; // Certifique-se de incluir o componente correto aqui


@NgModule({
  declarations: [
    AppComponent,
    ControleAcessoComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    ContadorComponent,
    ListItemsComponent,
    FormCadastroComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
