import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Tarefa } from '../../services/tarefa';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-lista-tarefas',
  styleUrl: './lista-tarefas.css',
  templateUrl: './lista-tarefas.html',
})
export class ListaTarefas {
  constructor(public tarefaService: Tarefa) {}
}
