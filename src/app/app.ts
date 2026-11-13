
import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header';
import { HomeComponent } from './components/home/home';
import { SobreComponent } from './components/sobre/sobre';
import { AreasAtendimentoComponent } from './components/areas-atendimento/areas-atendimento';
import { ProfissionalComponent } from './components/profissional/profissional';
import { ContatoComponent } from './components/contato/contato';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent,
    SobreComponent,
    AreasAtendimentoComponent,
    ProfissionalComponent,
    ContatoComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
