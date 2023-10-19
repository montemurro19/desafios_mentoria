function validaCpf(input) {
  const regexInputValido = /^[\d.-]+$/;
  const regexPontoTraco = /[.-]/g;

  const inputValido = regexInputValido.test(input);

  if (!inputValido) {
    return {
      input: input,
      type: null,
      isValid: false,
    };
  }

  let inputFormatado = String(input).replace(regexPontoTraco, "").split("");

  while (inputFormatado.length < 11) {
    inputFormatado.unshift("0");
  }

  let raw = inputFormatado.slice().join("");

  for (let i = 0; i < 2; i++) {
    const multiplicador = inputFormatado.length;
    const digito = inputFormatado.splice(-1);

    let resultado = inputFormatado.reduce(
      (acc, cur, i) => acc + cur * (multiplicador - i),
      0
    );

    resultado = (resultado * 10) % 11;

    if (resultado != digito) {
      return {
        input: input,
        type: "CPF",
        isValid: false,
      };
    }
  }

  return {
    input: input,
    type: "CPF",
    isValid: true,
    formated: `${raw.substring(0, 3)}.${raw.substring(3, 6)}.${raw.substring(6, 9)}-${raw.substring(9, 11)}`,
    raw: raw,
  };
}

module.exports = { validaCpf };
