const listaDeCidades: string[] = [
  "Salvador",
  "São Paulo",
  "Recife",
  "Rio de Janeiro",
];

const filtrarCidadesDeAte8Caracteres = (listaDeCidades: string[]): string[] => {
  const cidadesFiltradas: string[] = listaDeCidades.filter(
    (cidade: string) => cidade.length <= 8
  );
  return cidadesFiltradas;
};

console.log(filtrarCidadesDeAte8Caracteres(listaDeCidades));
