// src/FilaCircular.ts
export class FilaCircular<T> {
  private itens: (T | undefined)[];
  private inicio: number;
  private fim: number;
  private quantidade: number;
  private readonly capacidadeMaxima: number;

  constructor(capacidade: number) {
    if (capacidade <= 0) {
      throw new Error("Capacidade deve ser maior que zero.");
    }
    this.capacidadeMaxima = capacidade;
    this.itens = new Array<T | undefined>(capacidade);
    this.inicio = 0;
    this.fim = 0;
    this.quantidade = 0;
  }

  // Adicionar um novo elemento ao final da fila.
  enfileirar(valor: T): void {
    if (this.estaCheia()) {
      throw new Error("Fila cheia.");
    }
    this.itens[this.fim] = valor;
    this.fim = (this.fim + 1) % this.capacidadeMaxima; // avanço circular [web:15][web:25]
    this.quantidade++;
  }

  // Remover e retornar o primeiro elemento da fila (mais antigo).
  desenfileirar(): T {
    if (this.estaVazia()) {
      throw new Error("Fila vazia.");
    }
    const valor = this.itens[this.inicio] as T;
    this.itens[this.inicio] = undefined;
    this.inicio = (this.inicio + 1) % this.capacidadeMaxima;
    this.quantidade--;
    return valor;
  }

  // Retornar o elemento que está no início da fila (sem remover).
  frente(): T | null {
    if (this.estaVazia()) {
      return null;
    }
    return this.itens[this.inicio] as T;
  }

  // Verificar se a fila está vazia.
  estaVazia(): boolean {
    return this.quantidade === 0;
  }

  // Verificar se a fila está cheia.
  estaCheia(): boolean {
    return this.quantidade === this.capacidadeMaxima;
  }

  // Exibir a quantidade de elementos da fila.
  tamanho(): number {
    return this.quantidade;
  }

  // Retornar a capacidade máxima da fila.
  capacidade(): number {
    return this.capacidadeMaxima;
  }

  // Exibir quantos elementos ainda podem ser inseridos na fila.
  espacoDisponivel(): number {
    return this.capacidadeMaxima - this.quantidade;
  }

  // Exibir os elementos da fila em ordem lógica.
  elementos(): T[] {
    const resultado: T[] = [];
    let i = this.inicio;
    for (let count = 0; count < this.quantidade; count++) {
      resultado.push(this.itens[i] as T);
      i = (i + 1) % this.capacidadeMaxima;
    }
    return resultado;
  }
}
