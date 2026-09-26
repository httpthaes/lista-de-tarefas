import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Tarefa {

    tarefas = [
        { descricao: 'Estudar Angular', concluida: false },
        { descricao: 'Fazer alongamento', concluida: false },
        { descricao: 'Alimentar os animais', concluida: true}
    ];

}
