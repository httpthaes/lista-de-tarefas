import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Tarefa {

    tarefas = [
        { descricao: 'Estudar Angular', concluida: true },
        { descricao: 'Ir na academia', concluida: false },
        { descricao: 'Alimentar os animais', concluida: true}
    ];

    novaTarefa = '';
    
    adicionarTarefa() {
        this.tarefas.push({
            descricao: this.novaTarefa,
            concluida: false
        })

        this.novaTarefa = '';
    };
    
    removerTarefa(tarefa: any) {
        this.tarefas = this.tarefas.filter(t => t !== tarefa);
    };

    get tarefasConcluidas() {
        return this.tarefas.filter(t => t.concluida).length
    };
}
