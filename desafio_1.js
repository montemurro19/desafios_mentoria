function formataNome(nome) {
  const regexNumerosECaracteresEspeciais =
    /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\|]/g;
  const regexEspacosDuplicados = /\s+/g;
  const regexCapitalizar = /\b\w/g;

  const nomeFormatado = nome
    .replace(regexNumerosECaracteresEspeciais, "")
    .replace(regexEspacosDuplicados, " ")
    .replace(regexCapitalizar, function (match) {
      return match.toUpperCase();
    })
    .trim();

  return nomeFormatado;
}

module.exports = { formataNome };
