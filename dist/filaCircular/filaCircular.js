// src/FilaCircular.ts
export class FilaCircular {
    constructor(capacidade) {
        if (capacidade <= 0) {
            throw new Error("Capacidade deve ser maior que zero.");
        }
        this.capacidadeMaxima = capacidade;
        this.itens = new Array(capacidade);
        this.inicio = 0;
        this.fim = 0;
        this.quantidade = 0;
    }
    // Adicionar um novo elemento ao final da fila.
    enfileirar(valor) {
        if (this.estaCheia()) {
            throw new Error("Fila cheia.");
        }
        this.itens[this.fim] = valor;
        this.fim = (this.fim + 1) % this.capacidadeMaxima; // avanço circular [web:15][web:25]
        this.quantidade++;
    }
    // Remover e retornar o primeiro elemento da fila (mais antigo).
    desenfileirar() {
        if (this.estaVazia()) {
            throw new Error("Fila vazia.");
        }
        const valor = this.itens[this.inicio];
        this.itens[this.inicio] = undefined;
        this.inicio = (this.inicio + 1) % this.capacidadeMaxima;
        this.quantidade--;
        return valor;
    }
    // Retornar o elemento que está no início da fila (sem remover).
    frente() {
        if (this.estaVazia()) {
            return null;
        }
        return this.itens[this.inicio];
    }
    // Verificar se a fila está vazia.
    estaVazia() {
        return this.quantidade === 0;
    }
    // Verificar se a fila está cheia.
    estaCheia() {
        return this.quantidade === this.capacidadeMaxima;
    }
    // Exibir a quantidade de elementos da fila.
    tamanho() {
        return this.quantidade;
    }
    // Retornar a capacidade máxima da fila.
    capacidade() {
        return this.capacidadeMaxima;
    }
    // Exibir quantos elementos ainda podem ser inseridos na fila.
    espacoDisponivel() {
        return this.capacidadeMaxima - this.quantidade;
    }
    // Exibir os elementos da fila em ordem lógica.
    elementos() {
        const resultado = [];
        let i = this.inicio;
        for (let count = 0; count < this.quantidade; count++) {
            resultado.push(this.itens[i]);
            i = (i + 1) % this.capacidadeMaxima;
        }
        return resultado;
    }
}
