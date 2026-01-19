import { FilaCircular } from "./filaCircular";
const fila = new FilaCircular(3);
console.log(fila.estaVazia()); // true
fila.enfileirar(10);
fila.enfileirar(20);
console.log(fila.elementos()); // [10, 20]
console.log(fila.frente()); // 10
console.log(fila.tamanho()); // 2
console.log(fila.espacoDisponivel()); // 1
fila.enfileirar(30); // fila cheia agora
console.log(fila.estaCheia()); // true
console.log(fila.elementos()); // [10, 20, 30]
console.log(fila.desenfileirar()); // 10
console.log(fila.elementos()); // [20, 30]
fila.enfileirar(40); // reaproveita espaço (circular)
console.log(fila.elementos()); // [20, 30, 40]
