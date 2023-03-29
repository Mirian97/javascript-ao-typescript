const listaDeNumeros: number[] = [1, 98, -74, 0, 12, 19, 5, 60, 44];

const filtrarNumerosPares = (listaDeCidades: number[]) => {
  const numerosFiltrados: number[] = listaDeCidades.filter(
    (number: number) => number % 2 === 0
  );
  return numerosFiltrados;
};

console.log(filtrarNumerosPares(listaDeNumeros));
