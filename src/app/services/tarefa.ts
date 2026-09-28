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
    
    adicionarTarefa(descricao: string) {
        this.tarefas.push({
            descricao: descricao,
            concluida: false
        })
    };
    
    removerTarefa(tarefa: any) {
        this.tarefas = this.tarefas.filter(t => t !== tarefa);
    };

    get tarefasConcluidas() {
        return this.tarefas.filter(t => t.concluida).length
    };
}
