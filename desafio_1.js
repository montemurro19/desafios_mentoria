function formataNome(nome, boolean) {
  //falta adicionar muitos caracteres especiais
  const regexNumerosECaracteresEspeciais = /[\u0000-\u0019]|[\u0021-\u0040]|[\u005b-\u0060]|[\u007b-\u00bf]/g;
  const regexEspacosDuplicados = /\s+/g;
  const regexCapitalizar = /\b\w/g;
  //nao sei se peguei todos os acentos
  const regexAcentos = /[\u0300-\u036f]/g;

  let nomeFormatado = nome
    .replace(regexNumerosECaracteresEspeciais, "")
    .replace(regexEspacosDuplicados, " ")
    .replace(regexCapitalizar, (match) => match.toUpperCase())
    .trim();

  if (boolean) {
    nomeFormatado = nomeFormatado
      .normalize("NFKD")
      .replace(regexAcentos, "")
      .toUpperCase();
  }

  return nomeFormatado;
}

console.log(formataNome("cdigo @  três", false));
