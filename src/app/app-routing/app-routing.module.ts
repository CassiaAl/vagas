import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { MuralVagasComponent } from '../mural-vagas/mural-vagas.component';
import { PainelVagasComponent } from '../painel-vagas/painel-vagas.component';
import { MenuComponent } from '../menu/menu.component';


const rotas: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'mural', component: MuralVagasComponent },
  { path: 'painel', component: PainelVagasComponent },
  { path:'', redirectTo:'/mural', pathMatch:'full'}
]

  @NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule] })



export class AppRoutingModule { }
