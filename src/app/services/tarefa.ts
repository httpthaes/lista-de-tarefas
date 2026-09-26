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

    removerTarefa(tarefa: any) {

    }
}
