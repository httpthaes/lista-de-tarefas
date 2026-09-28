import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Tarefa } from '../../services/tarefa';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-lista-tarefas',
  styleUrl: './lista-tarefas.css',
  templateUrl: './lista-tarefas.html',
})
export class ListaTarefas {
  constructor(public tarefaService: Tarefa) {}

  formItem = new FormGroup({
    descricao: new FormControl('', Validators.required)
  })

  enviar(){
    if (this.formItem.valid) {
      this.tarefaService.adicionarTarefa(
        this.formItem.value.descricao!
      )

      this.formItem.reset({ descricao: '' })
    }
  }
}
