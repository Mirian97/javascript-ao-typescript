const arrayDeNumeros: number[] = [0, 122, 4, 6, 14, 8, 44];

const validarTodosNumerosSaoPares = (arrayDeNumeros: number[]): string => {
  const todosSaoPares: boolean = arrayDeNumeros.every(
    (number: number) => number % 2 === 0
  );
  if (todosSaoPares) {
    return "Array válido";
  }
  return "Array inválido";
};

console.log(validarTodosNumerosSaoPares(arrayDeNumeros));
