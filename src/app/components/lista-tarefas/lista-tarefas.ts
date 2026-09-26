import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Tarefa } from '../../services/tarefa';

@Component({
  imports: [CommonModule],
  selector: 'app-lista-tarefas',
  styleUrl: './lista-tarefas.css',
  templateUrl: './lista-tarefas.html',
})
export class ListaTarefas {
  constructor(public tarefa: Tarefa) {}
}
