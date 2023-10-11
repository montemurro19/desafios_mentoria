function formataNome(nome, formataBanco) {
  const regexLetras = /[^a-zà-ãç-êì-íò-õù-û\s]/g;
  const regexEspacosDuplicados = /\s+/g;
  const regexAcentos = /[\u0300-\u036f]/g;

  let nomeFormatado = String(nome)
    .toLowerCase()
    .replace(regexLetras, "")
    .replace(regexEspacosDuplicados, " ")
    .split(" ")
    .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
    .join(" ")
    .trim();

  if (formataBanco) {
    nomeFormatado = nomeFormatado
      .normalize("NFKD")
      .replace(regexAcentos, "")
      .toUpperCase();
  }

  return nomeFormatado;
}

module.exports = { formataNome };
