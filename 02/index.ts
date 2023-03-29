const livros: string[] = [
  "Guerra e Paz",
  "A Montanha Mágica",
  "Cem Anos de Solidão",
  "Dom Quixote",
  "A Divina Comédia",
];

const encontrarLivro = (nomeDoLivro: string, livros: string[]): string => {
  const livroEncontrado: number = livros.indexOf(nomeDoLivro);
  if (livroEncontrado === -1) {
    return "Livro não encontrado";
  }
  return `Livro encontrado na posição ${livroEncontrado + 1}`;
};

console.log(encontrarLivro("Guerra e Paz", livros));
